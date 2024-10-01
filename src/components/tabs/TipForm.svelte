<script lang="ts">
	import { formStyles } from '../styles'
	import type { Tip } from '../tipController'

	export let tips: Tip[] = []
	export let tipTitle = ''
	export let tipDescription = ''
	export let autoHide = true
	export let displayDuration = 5000
	export let onSubmit: (tip: Tip) => void
	export let onDelete: (id: string) => void

	const handleSave = () => {
		if (tipTitle && tipDescription) {
			onSubmit({
				title: tipTitle,
				description: tipDescription,
				autoHide,
				displayDuration
			})
			resetForm()
		}
	}

	const handleDelete = (id?: string) => {
		if (id && confirm('このTipsを削除しますか？')) {
			onDelete(id)
		}
	}

	const resetForm = () => {
		tipTitle = ''
		tipDescription = ''
		autoHide = true
		displayDuration = 5000
	}
</script>

<div class={formStyles.container}>
	<div class={formStyles.newTipRow}>
		<input type="text" placeholder="title..." bind:value={tipTitle} class={formStyles.titleItem} />
		<label class={formStyles.autoHideItem}>
			<input type="checkbox" bind:checked={autoHide} />
			Auto-hide
		</label>
		<input
			type="number"
			placeholder="Display duration (ms)"
			bind:value={displayDuration}
			class={formStyles.durationItem}
			disabled={!autoHide}
		/>
		<button class={formStyles.addButtonItem} aria-label="Add new tip" on:click={handleSave}>
			<i class="fas fa-plus">&nbsp;追加</i>
		</button>
		<textarea
			placeholder="description..."
			bind:value={tipDescription}
			class={formStyles.descriptionItem}
		/>
	</div>

	<hr class={formStyles.divider} />

	{#each tips as tip (tip.id)}
		<div class={formStyles.updateTipRow}>
			<button
				on:click={() => handleDelete(tip.id)}
				aria-label={`Delete tip: ${tip.title}`}
				class={formStyles.deleteButtonItem}
			>
				<i class="fas fa-trash">&nbsp;削除</i>
			</button>
			<input type="text" bind:value={tip.title} class={formStyles.titleItem} />
			<label class={formStyles.autoHideItem}>
				<input type="checkbox" bind:checked={tip.autoHide} />
				Auto-hide
			</label>
			<input
				type="number"
				bind:value={tip.displayDuration}
				class={formStyles.durationItem}
				placeholder="Display duration (ms)"
				disabled={!tip.autoHide}
			/>
			<button
				on:click={() => onSubmit(tip)}
				aria-label={`Save tip: ${tip.title}`}
				class={formStyles.saveButtonItem}
			>
				<i class="fas fa-save">&nbsp;更新</i>
			</button>
			<textarea bind:value={tip.description} class={formStyles.descriptionItem} />
		</div>
	{/each}
</div>
