'use client';
import styles from './page.module.css';
import Image from 'next/image';
import { Pie, PieChart, Tooltip, Cell, Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

export default function Reports() {

    const iconSize = 40;

    const data = [
      { name: 'Concluídas', value: 34, color : '#6366F1'},
      { name: 'Em andamento', value: 8, color : '#20C997' },
      { name: 'Pausadas', value: 3, color : '#F5B83D' },
      { name: 'Atrasadas', value: 3, color : '#F43F5E' },
    ];

    const hoursData = [
      { name: 'CRM', value: 52, color: '#6366F1' },
      { name: 'Web Sites', value: 28, color: '#20C997' },
      { name: 'App Mobile', value: 24, color: '#F5B83D' },
      { name: 'Interno', value: 22, color: '#F43F5E' },
    ];

    function calculatePercentage(value) {
        const total = data.reduce((sum, item) => sum + item.value, 0);

        return (value / total) * 100
    }

    return (
        <main className={styles.container}>
            <div className="header">
                <h3>Relatórios</h3>
                <p>
                    Acompanhe o desempenho do seu time, projetos e tarefas em tempo real.
                </p>
            </div>

            <div className={styles.cardIcon}>
                <div className={styles.cardSection}>
                  <div className={styles.iconDash}>
                    <Image
                      src="/icon-dashboard-card-section/card-mala.svg"
                      alt="Mala de viagem"
                      width={iconSize}
                      height={iconSize}
                      loading="eager"
                      className={styles.icon}
                    />
                  </div>
                  <p className={styles.text}>Tarefas concluídas</p>
                  <p className={styles.num}>{data[0].value}</p>
                  <p className={styles.info}>
                    <span>&uarr;20%</span> vs. período anterior.
                  </p>
                </div>

                <div className={styles.cardSection}>
                  <div className={styles.iconDash}>
                    <Image
                      src="/icon-dashboard-card-section/relogio-parede.svg"
                      alt="Relógio de parede"
                      width={iconSize}
                      height={iconSize}
                      loading="eager"
                      className={styles.icon}
                    />
                  </div>
                  <p className={styles.text}>Horas registradas</p>
                  <p className={styles.num}>{hoursData.reduce((total, item) => total + item.value, 0)}</p>
                  <p className={styles.info}>
                    <span>&uarr;18%</span> vs. período anterior.
                  </p>
                </div>

                <div className={styles.cardSection}>
                  <div className={styles.iconDash}>
                    <Image
                      src="/icon-dashboard-card-section/projetos-ativos.svg"
                      alt="Relatórios e projetos"
                      width={iconSize}
                      height={iconSize}
                      loading="eager"
                      className={styles.icon}
                    />
                  </div>
                  <p className={styles.text}>Projetos Ativos</p>
                  <p className={styles.num}>6</p>
                  <p className={styles.info}>
                    <span>&uarr;5%</span> vs. período anterior.
                  </p>
                </div>

                <div className={styles.cardSection}>
                  <div className={styles.iconDash}>
                    <Image
                      src="/icon-dashboard-card-section/projetos-ativos.svg"
                      alt="Relatórios e projetos"
                      width={iconSize}
                      height={iconSize}
                      loading="eager"
                      className={styles.icon}
                    />
                  </div>
                  <p className={styles.text}>Clientes atendidos</p>
                  <p className={styles.num}>5</p>
                  <p className={styles.info}>
                    <span>&uarr;8%</span> vs. período anterior.
                  </p>
                </div>
            </div>

            <div className={styles.teste}>
                <div className={styles.leftChart}>
                    <h3>Tarefas por status</h3>
                    <div className={styles.content}>
                        <div className={styles.chartPie}>
                        <PieChart width={300} height={300}>
                          <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            innerRadius={80}
                            outerRadius={130}
                            paddingAngle={2}
                            isAnimationActive={true}
                          >
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={entry.color}
                                />
                                ))}
                        </Pie>

                        </PieChart>
                        <div className={styles.chartInfo}>
                            <p>Total</p>
                            <span>{data.reduce((total, item) => total + item.value, 0)}</span>
                            <p>tarefas</p>
                        </div>
                    </div>

                    <div className={styles.legend}>
                        <div className={styles.legendItem}>
                            <div className={styles.legendName}>
                                <span className={`${styles.legendDot} ${styles.completed}`}/>
                                <span>Concluídas</span>
                            </div>
                                <span className={styles.legendValue}>{data[0].value}</span>
                                <span className={styles.legendPercentage}>{calculatePercentage(data[0].value).toFixed(1)}%</span>
                        </div>
                        <div className={styles.legendItem}>
                            <div className={styles.legendName}>
                                <span className={`${styles.legendDot} ${styles.inProgress}`} />
                                <span>Em andamento</span>
                            </div>

                            <span className={styles.legendValue}>{data[1].value}</span>
                            <span className={styles.legendPercentage}>{calculatePercentage(data[1].value).toFixed(1)}%</span>
                        </div>

                        <div className={styles.legendItem}>
                            <div className={styles.legendName}>
                                <span className={`${styles.legendDot} ${styles.paused}`} />
                                <span>Pausadas</span>
                            </div>

                            <span className={styles.legendValue}>{data[2].value}</span>
                            <span className={styles.legendPercentage}>{calculatePercentage(data[2].value).toFixed(1)}%</span>
                        </div>

                        <div className={styles.legendItem}>
                            <div className={styles.legendName}>
                                <span className={`${styles.legendDot} ${styles.overdue}`} />
                                <span>Atrasadas</span>
                            </div>
                                <span className={styles.legendValue}>{data[3].value}</span>
                                <span className={styles.legendPercentage}>{calculatePercentage(data[3].value).toFixed(1)}%</span>
                        </div>
                    </div>
                    </div>
                </div>

                <div className={styles.rightChart}>
                    <h3>Horas por projeto</h3>
                    <BarChart
                        style={{ width: '100%', maxWidth: '600', maxHeight: '70vh', aspectRatio: 2.61}}
                        responsive
                        data={hoursData}
                        margin={{top: 20, right: 30, left: 20, bottom: 5}}
                    >
                        <CartesianGrid stroke="#eee" strokeOpacity={0.5} />
                        <XAxis dataKey="name" strokeWidth={0.2} />
                        <YAxis stroke="#94a3b8" strokeWidth={0.2} />

                        <Tooltip 
                            defaultIndex={2}
                            formatter={(value) => [`${value}h`, 'Horas']}
                        />
                        <Bar
                            dataKey="value"
                            fill="#6366F1"
                            stroke="#0369a1"
                            radius={10}
                            barSize={70}
                        />

                    </BarChart>
                </div>
            </div>

        </main>
    );
}