<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import { consoleStyles } from '../styles'

	export let activeTab: string
	export let tabs: { name: string; label: string }[]
	const dispatch = createEventDispatcher()

	const setActiveTab = (tab: string) => {
		dispatch('change', tab)
	}
</script>

<div class={consoleStyles.tabs}>
	{#each tabs as { name, label }}
		<button
			class={`${consoleStyles.tab} ${activeTab === name ? consoleStyles.activeTab : ''}`}
			on:click={() => setActiveTab(name)}
		>
			{label}
		</button>
	{/each}
</div>
