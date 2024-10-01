export enum TabNames {
	Emitter = 'emitter',
	Tips = 'tips',
	Settings = 'settings'
}

export function intoTabName(value: string): TabNames {
	switch (value) {
		case TabNames.Emitter:
			return TabNames.Emitter
		case TabNames.Tips:
			return TabNames.Tips
		case TabNames.Settings:
			return TabNames.Settings
		default:
			throw new Error(`Invalid tab name: ${value}`)
	}
}
