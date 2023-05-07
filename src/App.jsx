import { Header } from './Components/Header'
import { Post } from './Post'
import "./global.css"
import styles from './app.module.css'
import { Sidebar } from './Components/Sidebar'

export function App() {
  return (
    <>
      <div>
        <Header/>
        <div className={styles.wrapper}>
         <Sidebar/>
          <main>
             <Post 
                author='Gabriel Santos' 
                content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem tenetur cum modi, atque autem ipsam laborum rem itaque quisquam cumque. Maiores tempore magni voluptates excepturi provident quidem odio pariatur nulla.'
              />
              <Post 
                author='Diego Fernades' 
                content='Outro Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem tenetur cum modi, atque autem ipsam laborum rem itaque quisquam cumque. Maiores tempore magni voluptates excepturi provident quidem odio pariatur nulla.'
              />
          </main>
        </div>
      </div>
    </>
  )
}
