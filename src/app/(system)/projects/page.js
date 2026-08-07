import Button from '@/components/primaryButton/primaryButton';
import styles from './page.module.css'
import ProgressBar from '@/components/progressBar/page';

export default function Projects() {

    const projetos = [
        {
            id: 1,
            projeto: "CRM SincroAlign",
            cliente: "Codariadev-LTDA",
            responsavel: "Wilson Jr.",
            status: "Em andamento",
            progresso: 99,
            prazo: "24 dez 2026",
            prioridade: "Alta",
            ultimaAtualizacao: "Há 2 horas"
        },
        {
            id: 2,
            projeto: "CRM SincroAlign",
            cliente: "Codariadev-LTDA",
            responsavel: "Wilson Jr.",
            status: "Em andamento",
            progresso: 99,
            prazo: "24 dez 2026",
            prioridade: "Alta",
            ultimaAtualizacao: "Há 2 horas"
        },
        {
            id: 3,
            projeto: "CRM SincroAlign",
            cliente: "Codariadev-LTDA",
            responsavel: "Wilson Jr.",
            status: "Em andamento",
            progresso: 99,
            prazo: "24 dez 2026",
            prioridade: "Alta",
            ultimaAtualizacao: "Há 2 horas"
        },
        {
            id: 4,
            projeto: "CRM SincroAlign",
            cliente: "Codariadev-LTDA",
            responsavel: "Wilson Jr.",
            status: "Em andamento",
            progresso: 99,
            prazo: "24 dez 2026",
            prioridade: "Alta",
            ultimaAtualizacao: "Há 2 horas"
        },
        {
            id: 5,
            projeto: "CRM SincroAlign",
            cliente: "Codariadev-LTDA",
            responsavel: "Wilson Jr.",
            status: "Em andamento",
            progresso: 99,
            prazo: "24 dez 2026",
            prioridade: "Alta",
            ultimaAtualizacao: "Há 2 horas"
        },
        {
            id: 6,
            projeto: "CRM SincroAlign",
            cliente: "Codariadev-LTDA",
            responsavel: "Wilson Jr.",
            status: "Em andamento",
            progresso: 99,
            prazo: "24 dez 2026",
            prioridade: "Alta",
            ultimaAtualizacao: "Há 2 horas"
        },
        {
            id: 7,
            projeto: "CRM SincroAlign",
            cliente: "Codariadev-LTDA",
            responsavel: "Wilson Jr.",
            status: "Em andamento",
            progresso: 87,
            prazo: "24 dez 2026",
            prioridade: "Alta",
            ultimaAtualizacao: "Há 2 horas"
        },
        {
            id: 8,
            projeto: "CRM SincroAlign",
            cliente: "Codariadev-LTDA",
            responsavel: "Wilson Jr.",
            status: "Em andamento",
            progresso: 99,
            prazo: "24 dez 2026",
            prioridade: "Alta",
            ultimaAtualizacao: "Há 2 horas"
        },
        {
            id: 9,
            projeto: "CRM SincroAlign",
            cliente: "Codariadev-LTDA",
            responsavel: "Wilson Jr.",
            status: "Em andamento",
            progresso: 99,
            prazo: "24 dez 2026",
            prioridade: "Alta",
            ultimaAtualizacao: "Há 2 horas"
        }
    ];

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
                    <div className={styles.projectList}>
                        <ul className={styles.pItemContainer}>
                            {projetos.map((item, index) => (
                                <li key={index} className={styles.pItem}>
                                    <p>
                                        {item.projeto}
                                    </p>
                                    <p>
                                        {item.cliente}
                                    </p>
                                    <p>
                                        {item.responsavel}
                                    </p>
                                    <p>
                                        {item.status}
                                    </p>
                                    <p>
                                        <ProgressBar percentual={item.progresso}/>
                                    </p>
                                    <p>
                                        {item.prazo}
                                    </p>
                                    <p>
                                        {item.prioridade}
                                    </p>
                                    <p>
                                        {item.ultimaAtualizacao}
                                    </p>
                                    <p>
                                        Açoes
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}