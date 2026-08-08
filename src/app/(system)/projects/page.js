'use client';

import { useState, useMemo } from 'react';
import Button from '@/components/primaryButton/primaryButton';
import styles from './page.module.css';

export default function Projects() {
    const projectsData = useMemo(() => [
        {
            id: 'PRJ-001',
            name: 'CRM SincroAlign',
            initials: 'CS',
            client: 'Flyal LTDA',
            responsible: 'Lucas Silva',
            status: 'Em andamento',
            statusClass: 'statusEmAndamento',
            progress: 78,
            deadline: '24 Jul 2025',
            priority: 'Alta',
            priorityClass: 'priorityAlta',
            updated: 'há 2 horas',
        },
        {
            id: 'PRJ-002',
            name: 'ERP Comercial',
            initials: 'EC',
            client: 'Acme Corp',
            responsible: 'Carla Mendes',
            status: 'Planejamento',
            statusClass: 'statusPlanejamento',
            progress: 12,
            deadline: '02 Ago 2025',
            priority: 'Média',
            priorityClass: 'priorityMedia',
            updated: 'ontem',
        },
        {
            id: 'PRJ-003',
            name: 'Website Alpha',
            initials: 'WA',
            client: 'Studio X',
            responsible: 'Pedro Costa',
            status: 'Concluído',
            statusClass: 'statusConcluido',
            progress: 100,
            deadline: '15 Jun 2025',
            priority: 'Baixa',
            priorityClass: 'priorityBaixa',
            updated: '3 dias',
        },
        {
            id: 'PRJ-004',
            name: 'App Mobile',
            initials: 'AP',
            client: 'Next Solutions',
            responsible: 'Juliana Alves',
            status: 'Em andamento',
            statusClass: 'statusEmAndamento',
            progress: 45,
            deadline: '18 Jul 2025',
            priority: 'Alta',
            priorityClass: 'priorityAlta',
            updated: 'há 1 dia',
        },
        {
            id: 'PRJ-005',
            name: 'Marketing Digital',
            initials: 'MI',
            client: 'Bright Marketing',
            responsible: 'Rafael Lima',
            status: 'Atrasado',
            statusClass: 'statusAtrasado',
            progress: 25,
            deadline: '10 Jul 2025',
            priority: 'Média',
            priorityClass: 'priorityMedia',
            updated: 'há 5 horas',
        },
        {
            id: 'PRJ-006',
            name: 'Sistema Interno',
            initials: 'SI',
            client: 'Tech Solutions',
            responsible: 'Fernando Souza',
            status: 'Pausado',
            statusClass: 'statusPausado',
            progress: 0,
            deadline: '30 Ago 2025',
            priority: 'Baixa',
            priorityClass: 'priorityBaixa',
            updated: '1 semana',
        },
    ], []);

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedClient, setSelectedClient] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('');
    const [selectedPriority, setSelectedPriority] = useState('');
    const [sortOrder, setSortOrder] = useState('');

    const clientsList = useMemo(() => [...new Set(projectsData.map(p => p.client))], [projectsData]);
    const statusList = useMemo(() => [...new Set(projectsData.map(p => p.status))], [projectsData]);
    const priorityList = useMemo(() => [...new Set(projectsData.map(p => p.priority))], [projectsData]);

    const handleClearFilters = () => {
        setSearchTerm('');
        setSelectedClient('');
        setSelectedStatus('');
        setSelectedPriority('');
        setSortOrder('');
    };

    const filteredProjects = useMemo(() => {
        return projectsData
            .filter(project => {
                const searchLower = searchTerm.toLowerCase();
                const matchesSearch = 
                    project.name.toLowerCase().includes(searchLower) ||
                    project.client.toLowerCase().includes(searchLower) ||
                    project.id.toLowerCase().includes(searchLower) ||
                    project.responsible.toLowerCase().includes(searchLower);

                const matchesClient = selectedClient ? project.client === selectedClient : true;
                const matchesStatus = selectedStatus ? project.status === selectedStatus : true;
                const matchesPriority = selectedPriority ? project.priority === selectedPriority : true;

                return matchesSearch && matchesClient && matchesStatus && matchesPriority;
            })
            .sort((a, b) => {
                if (sortOrder === 'name-asc') return a.name.localeCompare(b.name);
                if (sortOrder === 'name-desc') return b.name.localeCompare(a.name);
                if (sortOrder === 'progress-desc') return b.progress - a.progress;
                return 0;
            });
    }, [searchTerm, selectedClient, selectedStatus, selectedPriority, sortOrder, projectsData]);

    return (
        <main className={styles.container}>
            <div className='header'>
                <h3>Projetos</h3>
                <p>Gerencie todos os seus projetos em um único lugar.</p>
            </div>

            <div className={styles.content}>
                <div className={styles.projectSearch}>
                    <input 
                        type="text" 
                        placeholder="Pesquisar projeto, cliente, código ou responsável..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />

                    <select 
                        value={selectedClient} 
                        onChange={(e) => setSelectedClient(e.target.value)}
                        className={styles.filterSelect}
                    >
                        <option value="">Todos os clientes</option>
                        {clientsList.map((client, idx) => (
                            <option key={idx} value={client}>{client}</option>
                        ))}
                    </select>

                    <select 
                        value={selectedStatus} 
                        onChange={(e) => setSelectedStatus(e.target.value)}
                        className={styles.filterSelect}
                    >
                        <option value="">Todos os status</option>
                        {statusList.map((status, idx) => (
                            <option key={idx} value={status}>{status}</option>
                        ))}
                    </select>

                    <select 
                        value={selectedPriority} 
                        onChange={(e) => setSelectedPriority(e.target.value)}
                        className={styles.filterSelect}
                    >
                        <option value="">Todas as prioridades</option>
                        {priorityList.map((priority, idx) => (
                            <option key={idx} value={priority}>{priority}</option>
                        ))}
                    </select>

                    <select 
                        value={sortOrder} 
                        onChange={(e) => setSortOrder(e.target.value)}
                        className={styles.filterSelect}
                    >
                        <option value="">Ordenar por</option>
                        <option value="name-asc">Nome (A-Z)</option>
                        <option value="progress-desc">Maior Progresso</option>
                    </select>

                    <button 
                        onClick={handleClearFilters}
                        className={styles.clearFilterBtn}
                    >
                        Limpar filtros
                    </button>
                </div>

                <div className={styles.projectsPanel}>
                    <div className={styles.panelHeader}>
                        <span>Projeto</span>
                        <span>Cliente</span>
                        <span>Responsável</span>
                        <span>Status</span>
                        <span>Progresso</span>
                        <span>Prazo</span>
                        <span>Prioridade</span>
                        <span>Última atualização</span>
                        <span>Ações</span>
                    </div>

                    <div className={styles.panelBody}>
                        {filteredProjects.length > 0 ? (
                            filteredProjects.map((project, index) => (
                                <div className={styles.tableRow} key={index}>
                                    <div className={styles.colProject}>
                                        <div className={styles.projectAvatar}>{project.initials}</div>
                                        <div>
                                            <strong>{project.name}</strong>
                                            <span>{project.id}</span>
                                        </div>
                                    </div>

                                    <div className={styles.colClient}>{project.client}</div>

                                    <div className={styles.colResponsible}>
                                        <div className={styles.userAvatarCircle}></div>
                                        <span>{project.responsible}</span>
                                    </div>

                                    <div className={styles.colStatus}>
                                        <span className={`${styles.statusBadge} ${styles[project.statusClass]}`}>
                                            <span className={styles.statusDot}></span>
                                            {project.status}
                                        </span>
                                    </div>

                                    <div className={styles.colProgress}>
                                        <span className={styles.progressText}>{project.progress}%</span>
                                        <div className={styles.progressBarBg}>
                                            <div 
                                                className={styles.progressBarFill} 
                                                style={{ width: `${project.progress}%` }}
                                            ></div>
                                        </div>
                                    </div>

                                    <div className={styles.colDeadline}>{project.deadline}</div>

                                    <div className={styles.colPriority}>
                                        <span className={`${styles.priorityBadge} ${styles[project.priorityClass]}`}>
                                            {project.priority}
                                        </span>
                                    </div>

                                    <div className={styles.colUpdated}>{project.updated}</div>

                                    <div className={styles.colActions}>
                                        <div className={styles.actionIconBtn} title="Visualizar"></div>
                                        <div className={styles.actionIconBtn} title="Editar"></div>
                                        <div className={styles.actionIconBtn} title="Mais opções"></div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div style={{ padding: '2rem', textAlign: 'center', color: '#71717a', fontSize: '0.9rem' }}>
                                Nenhum projeto encontrado com os filtros selecionados.
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className={styles.floatingBtn}>
                <Button variant="rounded">+</Button>
            </div>
        </main>
    );
}