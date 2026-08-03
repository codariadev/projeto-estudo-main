import Button from '@/components/primaryButton/primaryButton';
import styles from './page.module.css'

export default function Projects() {

    return (
        <main className={styles.container}>
            <div className='header'> {/* Criação da variavel css global para todos os headers*/}
                <h3>Projetos</h3>
                <p>Gerencie todos os seus projetos em um único lugar.</p>
            </div>
            <div className={styles.content}>
                <div className={styles.projectSearch}>
                <input></input>
                <Button variant='viewProducts'>Todos os clientes</Button>
                <Button variant='viewProducts'>Todos os status</Button>
                <Button variant='viewProducts'>Todas as prioridades</Button>
                <Button variant='viewProducts'>Ordenar por</Button>
                <Button variant='viewProducts'>Limpar filtros</Button>
            </div>
            <div className={styles.projectsPanel}>
                <div className={styles.panelTitle}>
                    <ul>
                        <li>Projeto</li>
                        <li>Cliente</li>
                        <li>Responsável</li>
                        <li>Status</li>
                        <li>Progresso</li>
                        <li>Prazo</li>
                        <li>Prioridade</li>
                        <li>Última atualização</li>
                        <li>Ações</li>
                    </ul>
                </div>
            </div>
            </div>
        </main>
    );
}