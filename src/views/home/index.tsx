/*
 * @Description: Home
 * @Author: hyx
 * @Date: 2022-08-25 16:42:05
 */

import MyHeader from '@/components/header'
import MySidebar from '@/components/sidebar'
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'Home',
	setup() {
		return () => (
			<div>
				<MyHeader />
				<MySidebar />
				<div class="content-box">
					<div class="content">
						<h1>Home</h1>
					</div>
				</div>
			</div>
		)
	},
})
