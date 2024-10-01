<script lang="ts">
	import { listen } from '@tauri-apps/api/event'
	import { onMount, onDestroy } from 'svelte'
	import { panelStyles } from '../../components/styles'
	import { fly } from 'svelte/transition'
	import type { Tip } from '../../components/tipController'

	let showTip = false
	let hideTimeout: ReturnType<typeof setTimeout> | null = null
	let displayedTipTitle = ''
	let displayedTipDescription = ''
	let autoHide = true
	let displayDuration = 5000

	const setTip = (tip: Tip) => {
		displayedTipTitle = tip.title
		displayedTipDescription = tip.description
		displayDuration = tip.displayDuration
		autoHide = tip.autoHide
		showTip = !showTip
		if (autoHide) manageAutoHide()
	}

	const manageAutoHide = () => {
		if (hideTimeout) clearTimeout(hideTimeout)
		if (autoHide) {
			hideTimeout = setTimeout(() => (showTip = false), displayDuration)
		}
	}

	onMount(() => {
		listen<Tip>('displayTip', (event) => {
			setTip(event.payload)
		})
	})

	onDestroy(() => hideTimeout && clearTimeout(hideTimeout))
</script>

<div class={panelStyles.container}>
	<div data-tauri-drag-region class={panelStyles.dragRegion}></div>
	{#if showTip}
		<div in:fly={{ x: 100, duration: 300 }} out:fly={{ x: 100, duration: 300 }}>
			<h2 class={panelStyles.title}>{displayedTipTitle}</h2>
			<p class={panelStyles.description}>{displayedTipDescription}</p>
		</div>
	{/if}
</div>
