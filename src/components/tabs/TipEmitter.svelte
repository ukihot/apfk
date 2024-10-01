<script lang="ts">
	import { type Tip } from '../tipController'
	import { consoleStyles } from '../styles'

	export let tips: Tip[]
	export let showTip: (tip: Tip) => void
</script>

<div class={consoleStyles.buttonList}>
	{#each tips as tip}
		<button class={consoleStyles.button} on:click={() => showTip(tip)}>{tip.title}</button>
	{/each}
</div>
