<script lang="ts">
	import { listen } from '@tauri-apps/api/event'
	import { onMount } from 'svelte'
	import { center } from 'styled-system/patterns'

	type TipEventPayload = {
		title: string
		description: string
	}

	let displayedTipTitle = ''
	let displayedTipDescription = ''

	onMount(() => {
		listen<TipEventPayload>('displayTip', (event) => {
			displayedTipTitle = event.payload.title
			displayedTipDescription = event.payload.description
		})
	})

	let panelStyles = {
		container: center()
	}
</script>

<div data-tauri-drag-region="default" class={panelStyles.container}>
	<h1>Welcome to the Tip Panel</h1>
	<p>Displayed Tip Title: {displayedTipTitle}</p>
	<p>Displayed Tip Description: {displayedTipDescription}</p>
</div>
