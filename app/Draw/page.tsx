"use client"

import { Tldraw } from 'tldraw'
import 'tldraw/tldraw.css'

export default function () {
	return (
		<div style={{ position: 'fixed', inset: 0 , top: '8vh', height: '92vh' }}>
			<Tldraw />
		</div>
	)
}