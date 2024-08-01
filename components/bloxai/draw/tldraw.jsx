"use client"

import { Tldraw } from 'tldraw'
import 'tldraw/tldraw.css'

export default function () {
	return (
		<div style={{ position: 'fixed', inset: 0 , height: '100vh' }}>
			<Tldraw />
		</div>
	)
}