<script lang="ts">
	import { settingStyles } from '../styles'
	import { pruneTips } from '../tipController'

	const handlePrune = () => {
		if (confirm('すべてのデータが削除されます。よろしいですか？')) {
			pruneTips()
			alert('データが削除されました。')
			window.location.reload()
		}
	}
</script>

<div class={settingStyles.container}>
	<div>データ全削除</div>
	<div>
		<button class={settingStyles.button} on:click={handlePrune}>DELETE</button>
	</div>
</div>
