export type Tip = {
	id: string
	title: string
	description: string
}

const storageKey = 'tips'

// データを保存（更新または新規登録）
export const saveTip = (tip: Tip): void => {
	const tips = getAllTips()
	const existingIndex = tips.findIndex((existingTip) => existingTip.id === tip.id)

	// 更新または追加
	const updatedTips =
		existingIndex !== -1
			? tips.map((existingTip, index) => (index === existingIndex ? tip : existingTip))
			: [...tips, tip]

	localStorage.setItem(storageKey, JSON.stringify(updatedTips))
}

// データを削除
export const deleteTip = (id: string): void => {
	const updatedTips = getAllTips().filter((tip) => tip.id !== id)
	localStorage.setItem(storageKey, JSON.stringify(updatedTips))
}

// データを取得
export const getTip = (id: string): Tip | null => {
	return getAllTips().find((tip) => tip.id === id) || null
}

// すべてのデータを取得
export const getAllTips = (): Tip[] => {
	const tips = localStorage.getItem(storageKey)
	return tips ? JSON.parse(tips) : []
}
