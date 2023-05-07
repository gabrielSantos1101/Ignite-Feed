import style from './Sidebar.module.css'

export function Sidebar() {
    return <aside className={style.sidebar}>
        <img className={style.cover} src="https://images.unsplash.com/photo-1608306448197-e83633f1261c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />

        <div className={style.profile}>
        <strong>Gabriel Santos</strong>
        <span>web Developer</span>
        </div>
        <footer>
            <a href="#">
                Ediar seu perfil
            </a>
        </footer>
    </aside>
}