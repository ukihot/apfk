<script lang="ts">
	import { onMount } from 'svelte'
	import { saveTip, getAllTips, type Tip, deleteTip } from '../components/tipController'
	import { emit } from '@tauri-apps/api/event'
	import { consoleStyles } from '../components/styles'
	import Tabs from '../components/tabs/Tabs.svelte'
	import TipForm from '../components/tabs/TipForm.svelte'
	import TipEmitter from '../components/tabs/TipEmitter.svelte'
	import UserSetting from '../components/tabs/UserSetting.svelte'
	import { intoTabName, TabNames } from '../components/tabs/tabs'

	let tipTitle = ''
	let tipDescription = ''
	let tips: Tip[] = []
	let activeTab = TabNames.Tips

	const loadTips = () => {
		tips = getAllTips()
	}

	const onSubmit = (tip: Tip) => {
		saveTip(tip)
		loadTips()
	}

	const showTip = (tip: Tip) => {
		emit('displayTip', {
			title: tip.title,
			description: tip.description,
			autoHide: tip.autoHide,
			displayDuration: tip.displayDuration
		})
	}

	const onDelete = (id: string) => {
		deleteTip(id)
		loadTips()
	}

	const handleTabChange = (tab: string) => {
		try {
			activeTab = intoTabName(tab)
		} catch (error) {
			console.error(error)
		}
	}

	onMount(() => {
		loadTips()
	})
</script>

<div class={consoleStyles.container}>
	<Tabs
		{activeTab}
		tabs={[
			{ name: TabNames.Emitter, label: 'Studio' },
			{ name: TabNames.Tips, label: 'Tips' },
			{ name: TabNames.Settings, label: 'Settings' }
		]}
		on:change={(event) => handleTabChange(event.detail)}
	/>

	<div class={consoleStyles.container}>
		{#if activeTab === TabNames.Tips}
			<TipForm {tips} {tipTitle} {tipDescription} {onSubmit} {onDelete} />
		{/if}

		{#if activeTab === TabNames.Emitter}
			<TipEmitter {tips} {showTip} />
		{/if}

		{#if activeTab === TabNames.Settings}
			<UserSetting />
		{/if}
	</div>
</div>
