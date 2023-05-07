import style from './Sidebar.module.css'
import { PencilSimpleLine } from '@phosphor-icons/react'

export function Sidebar() {
    return <aside className={style.sidebar}>
        <img className={style.cover} src="https://images.unsplash.com/photo-1608306448197-e83633f1261c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />

        <div className={style.profile}>
            <img src="https://github.com/gabrielsantos1101.png" />
        <strong>Gabriel Santos</strong>
        <span>web Developer</span>
        </div>
        <footer>
            <a href="#">
            <PencilSimpleLine size={20} /> Ediar seu perfil
            </a>
        </footer>
    </aside>
}