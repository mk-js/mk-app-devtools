export function getMeta() {
	return {
		name: 'root',
		component: 'Layout',
		className: 'mk-app-devtools',
		children: [{
			name: 'tabs',
			component: 'Tabs',
			className: 'mk-app-devtools-tabs',
			onChange: '{{$tabChange}}',
			
			children: [{
				name: 'apps',
				component: 'Tabs.TabPane',
				key: 'apps',
				tab: '当期网站所有app'
			}, {
				name: 'state',
				component: 'Tabs.TabPane',
				key: 'state',
				tab: '当前网站完整状态(state)'
			}, {
				name: 'mockData',
				component: 'Tabs.TabPane',
				key: 'mockData',
				tab: 'mock数据'
			}, {
				name: 'apis',
				component: 'Tabs.TabPane',
				key: 'apis',
				tab: '所有API'
			}]
		}, {
			name: 'content',
			component: '::div',
			className: 'mk-app-devtools-content',
			children: [{
				name: 'state',
				component: 'JSONTree',
				_visible: "{{data.tabKey=='state'}}",
				data: '{{$getState()}}'
			}, {
				name: 'apps',
				component: 'JSONTree',
				_visible: "{{data.tabKey=='apps'}}",
				data: '{{$getApps()}}'
			}, {
				name: 'mockData',
				component: 'JSONTree',
				_visible: "{{data.tabKey=='mockData'}}",
				data: '{{$getMockData()}}'
			}, {
				name: 'apis',
				component: 'JSONTree',
				_visible: "{{data.tabKey=='apis'}}",
				data: '{{$getAPIs()}}'
			}]
		}]
	}
}

export function getInitState() {
	return {
		data: {
			tabKey: 'apps'
		}
	}
}