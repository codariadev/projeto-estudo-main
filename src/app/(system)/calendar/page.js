'use client';

import { useRef, useState } from 'react';
import styles from './page.module.css';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/react/daygrid';

import '@fullcalendar/react/skeleton.css';
import '@fullcalendar/react/themes/classic/theme.css';
import '@fullcalendar/react/themes/classic/palette.css';

import themePlugin from '@fullcalendar/react/themes/classic';

export default function Calendar() {
    const calendarRef = useRef(null);
    const miniCalendarRef = useRef(null);

    const [currentTitle, setCurrentTitle] = useState('');

    const events = [
        {
            title: 'Reunião CRM',
            date: '2026-09-23'
        },
        {
            title: 'Entrega do projeto',
            date: '2026-09-25'
        },
        {
            title: 'Revisão do sistema',
            date: '2026-09-28'
        },
        {
            title: 'Planejamento',
            date: '2026-09-30'
        }
    ];

    const handlePrev = () => {
        const calendarApi = calendarRef.current?.getApi();
        calendarApi?.prev();
        if (calendarApi) {
            setCurrentTitle(calendarApi.view.title);
        }
    };

    const handleNext = () => {
        const calendarApi = calendarRef.current?.getApi();
        calendarApi?.next();
        if (calendarApi) {
            setCurrentTitle(calendarApi.view.title);
        }
    };

    const handleToday = () => {
        const calendarApi = calendarRef.current?.getApi();
        calendarApi?.today();
        if (calendarApi) {
            setCurrentTitle(calendarApi.view.title);
        }
    };

    const handleMiniPrev = () => {
        const calendarApi = miniCalendarRef.current?.getApi();
        calendarApi?.prev();
    };

    const handleMiniNext = () => {
        const calendarApi = miniCalendarRef.current?.getApi();
        calendarApi?.next();
    };

    const renderMiniEvent = () => {
        return <span className={styles.miniEventDot}></span>;
    };

    return (
        <main className={styles.container}>
            <div className="header">
                <h3>Calendário</h3>
                <p>
                    Gerencie seus compromissos e eventos em um único lugar.
                </p>
            </div>

            <div className={styles.calendarContent}>
                <div className={styles.calendarToolbar}>
                    <div className={styles.calendarNavigation}>
                        <button
                            className={styles.navButton}
                            onClick={handlePrev}
                        >
                            ‹
                        </button>

                        <button
                            className={styles.todayButton}
                            onClick={handleToday}
                        >
                            Hoje
                        </button>

                        <button
                            className={styles.navButton}
                            onClick={handleNext}
                        >
                            ›
                        </button>
                    </div>

                    <h2 className={styles.calendarTitle}>
                        {currentTitle}
                    </h2>

                    <div className={styles.calendarActions}>
                        <button className={styles.viewButton}>
                            Mês
                        </button>

                        <button className={styles.addButton}>
                            + Novo evento
                        </button>
                    </div>
                </div>

                <div className={styles.calendarLayout}>
                    <div className={styles.calendarPanel}>
                        <FullCalendar
                            ref={calendarRef}
                            plugins={[
                                themePlugin,
                                dayGridPlugin
                            ]}
                            initialView="dayGridMonth"
                            headerToolbar={false}
                            locale="pt-br"
                            fixedWeekCount={false}
                            dayMaxEvents={3}
                            aspectRatio={2.3}
                            datesSet={(info) => {
                                setCurrentTitle(info.view.title);
                            }}
                            events={events}
                        />
                    </div>

                    <aside className={styles.calendarSidebar}>
                        <div className={styles.miniCalendar}>
                            <div className={styles.miniCalendarHeader}>
                                <h3 className={styles.miniCalendarTitle}>
                                    Setembro de 2026
                                </h3>

                                <div className={styles.miniCalendarNavigation}>
                                    <button
                                        className={styles.miniNavButton}
                                        onClick={handleMiniPrev}
                                    >
                                        ‹
                                    </button>

                                    <button
                                        className={styles.miniNavButton}
                                        onClick={handleMiniNext}
                                    >
                                        ›
                                    </button>
                                </div>
                            </div>

                            <FullCalendar
                                ref={miniCalendarRef}
                                plugins={[
                                    themePlugin,
                                    dayGridPlugin
                                ]}
                                initialView="dayGridMonth"
                                headerToolbar={false}
                                locale="pt-br"
                                fixedWeekCount={false}
                                showNonCurrentDates={true}
                                events={events}
                                eventDisplay="list-item"
                                eventContent={renderMiniEvent}
                                dayMaxEvents={false}
                            />
                        </div>

                        <div className={styles.upcomingEvents}>
                            <div className={styles.upcomingHeader}>
                                <h3 className={styles.upcomingTitle}>
                                    Próximos eventos
                                </h3>

                                <button className={styles.viewAll}>
                                    Ver todos →
                                </button>
                            </div>

                            <div className={styles.eventItem}>
                                <span className={styles.eventDot}></span>
                                <span className={styles.eventTime}>
                                    09:00
                                </span>
                                <div className={styles.eventInfo}>
                                    <p className={styles.eventName}>
                                        Reunião CRM
                                    </p>
                                    <p className={styles.eventType}>
                                        Reunião
                                    </p>
                                </div>
                            </div>

                            <div className={styles.eventItem}>
                                <span className={styles.eventDot}></span>
                                <span className={styles.eventTime}>
                                    14:00
                                </span>
                                <div className={styles.eventInfo}>
                                    <p className={styles.eventName}>
                                        Entrega do projeto
                                    </p>
                                    <p className={styles.eventType}>
                                        Projeto
                                    </p>
                                </div>
                            </div>

                            <div className={styles.eventItem}>
                                <span className={styles.eventDot}></span>
                                <span className={styles.eventTime}>
                                    10:00
                                </span>
                                <div className={styles.eventInfo}>
                                    <p className={styles.eventName}>
                                        Revisão do sistema
                                    </p>
                                    <p className={styles.eventType}>
                                        Tarefa
                                    </p>
                                </div>
                            </div>

                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}