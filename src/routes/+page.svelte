<script lang="ts">
	import { onMount } from 'svelte'
	import { saveTip, getAllTips, type Tip, deleteTip } from '../components/tipController'
	import { emit } from '@tauri-apps/api/event'
	import { css } from 'styled-system/css'
	import { container } from 'styled-system/patterns'

	let tipTitle = ''
	let tipDescription = ''
	let tips: Tip[] = []
	let activeTab = 'tips'

	async function handleSubmit() {
		if (tipTitle.trim() === '' || tipDescription.trim() === '') {
			alert('Please enter both a title and a description.')
			return
		}
		const tip: Tip = { id: Date.now().toString(), title: tipTitle, description: tipDescription }
		saveTip(tip)
		tipTitle = ''
		tipDescription = ''
		loadTips()
	}

	const loadTips = () => {
		tips = getAllTips()
	}

	const showTip = (tip: Tip) => {
		emit('displayTip', { title: tip.title, description: tip.description })
	}

	const handleDeleteTip = (id: string) => {
		deleteTip(id)
		loadTips()
	}

	onMount(() => {
		loadTips()
	})

	const styles = {
		container: container(),
		tabs: css({
			display: 'flex',
			borderBottom: '2px solid #ccc'
		}),
		tab: css({
			p: '10px',
			cursor: 'pointer',
			fontWeight: {  _focus: 'bold' },
			borderBottom: {  _focus: '2px solid blue' }
		}),
		tabContent: css({
			p: '20px'
		}),
		input: css({
			border: '1px solid #ccc',
			p: '10px',
			margin: '5px 0',
			w: '100%'
		}),
		button: css({
			bg: 'sky.300',
			color: 'white',
			p: '10px',
			marginTop: '10px',
			cursor: 'pointer'
		}),
		buttonList: css({
			display: 'flex',
			flexDir: 'column'
		}),
		removeButton: css({
			border: 'none',
			background: 'none',
			cursor: 'pointer',
			color: {base: 'red.500', _hover: 'red.900'},
			p: 0,
			fontSize: '1rem'
		})
	}
</script>

<div class={styles.container}>
	<div class={styles.tabs}>
		<button
			class={`${styles.tab} ${activeTab === 'buttons' ? 'active' : ''}`}
			on:click={() => (activeTab = 'buttons')}
		>
			Studio
		</button>
		<button
			class={`${styles.tab} ${activeTab === 'tips' ? 'active' : ''}`}
			on:click={() => (activeTab = 'tips')}
		>
			Tips Master
		</button>
	</div>

	{#if activeTab === 'tips'}
		<div class={styles.tabContent}>
			<form on:submit|preventDefault={handleSubmit}>
				<input class={styles.input} placeholder="Enter a tip title..." bind:value={tipTitle} />
				<input
					class={styles.input}
					placeholder="Enter a tip description..."
					bind:value={tipDescription}
				/>
				<button class={styles.button} type="submit">Add Tip</button>
			</form>

			<h2>Tips List</h2>
			<table>
				<thead>
					<tr>
						<th>Action</th>
						<th>Title</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					{#each tips as tip}
						<tr>
							<td>
								<button
									on:click={() => handleDeleteTip(tip.id)}
									aria-label={`Delete tip: ${tip.title}`}
									class={styles.removeButton}
								>
									<i class="fas fa-trash"></i>
								</button>
							</td>
							<td>{tip.title}</td>
							<td>{tip.description}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{/if}

	{#if activeTab === 'buttons'}
		<div class={styles.tabContent}>
			<div class={styles.buttonList}>
				{#each tips as tip}
					<button class={styles.button} on:click={() => showTip(tip)}>{tip.title}</button>
				{/each}
			</div>
		</div>
	{/if}
</div>
