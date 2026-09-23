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

    const [currentTitle, setCurrentTitle] = useState('');

    const handlePrev = () => {
        const calendarApi = calendarRef.current?.getApi();

        calendarApi?.prev();

        if (calendarApi) {
            setCurrentTitle(
                calendarApi.view.title
            );
        }
    };

    const handleNext = () => {
        const calendarApi = calendarRef.current?.getApi();

        calendarApi?.next();

        if (calendarApi) {
            setCurrentTitle(
                calendarApi.view.title
            );
        }
    };

    const handleToday = () => {
        const calendarApi = calendarRef.current?.getApi();

        calendarApi?.today();

        if (calendarApi) {
            setCurrentTitle(
                calendarApi.view.title
            );
        }
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
                        aspectRatio={3}
                         datesSet={(info) => {
                            setCurrentTitle(info.view.title);
                        }}
                        events={[
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
                            }
                        ]}
                    />

                </div>

            </div>

        </main>
    );
}