import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/primaryButton/primaryButton";

export default function HomePage() {
  return (
    <main className={styles.home}>
      <div className="header">
        <h1>Dashboard Principal.</h1>
        <p>Bem-Vindo de volta, aqui está o resumo das suas atividades.</p>
      </div>
      <div className={styles.cardIcon}>
        <div className={styles.cardSection}>
          <div className={styles.iconMala}>
            <Image
              className={styles.ImageMala}
              src="/icon-dashboard-card-section/card-mala.svg"
              alt="logo"
              width={75}
              height={75}
              loading="eager"
            />
          </div>
          <p className={styles.text}>Projetos Ativos</p>
          <p className={styles.num}>12</p>
          <p className={styles.info}>
            <span>&uarr;20%</span> em relação ao mês anterior.
          </p>
        </div>
        <div className={styles.cardSection}>
          <div className={styles.iconRelogio}>
            <Image
              className={styles.ImageRelogioParede}
              src="/icon-dashboard-card-section/relogio-parede.svg"
              alt="Mala de viagem"
              width={75}
              height={75}
              loading="eager"
            />
          </div>
          <p className={styles.text}>Projetos Ativos</p>
          <p className={styles.num}>12</p>
          <p className={styles.info}>
            <span>&uarr;12%</span> em relação ao mês anterior.
          </p>
        </div>
        <div className={styles.cardSection}>
          <div className={styles.iconRelatorios}>
            <Image
              className={styles.ImageProjetosAtivos}
              src="/icon-dashboard-card-section/projetos-ativos.svg"
              alt="relogio"
              width={75}
              height={75}
              loading="eager"
            />
          </div>
          <p className={styles.text}>Projetos Ativos</p>
          <p className={styles.num}>12</p>
          <p className={styles.info}>
            <span>&uarr;5%</span> em relação ao mês anterior.
          </p>
        </div>
      </div>
      <div className={styles.actionsCard}>
        <h1>Ações Rápidas</h1>
        <p>Acesse as principais funcionalidades do sitema.</p>
        <div className={styles.btnActions}>
          <Button className={styles.btnIcon} variant="newProject">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="white"
                stroke="none"
              >
                <path
                  d="M2375 4900 c-584 -52 -1098 -295 -1501 -713 -617 -636 -820 -1558
-530 -2396 116 -334 288 -611 540 -869 709 -727 1796 -914 2712 -466 484 237
889 656 1104 1144 276 622 274 1313 -5 1931 -275 612 -840 1101 -1480 1282
-276 78 -583 109 -840 87z m457 -225 c322 -42 643 -162 906 -339 145 -97 245
-180 362 -302 299 -313 484 -683 565 -1129 23 -124 31 -425 16 -567 -54 -493
-264 -933 -615 -1284 -351 -351 -796 -564 -1285 -615 -143 -15 -443 -6 -566
16 -444 80 -817 267 -1129 565 -308 295 -518 670 -610 1090 -39 178 -49 301
-43 514 5 197 18 296 62 467 217 847 936 1478 1810 1588 116 14 404 12 527 -4z"
                />
                <path
                  d="M2368 4260 c-191 -30 -349 -164 -420 -356 -21 -55 -22 -79 -26 -381
l-3 -322 -322 -3 c-320 -4 -322 -4 -391 -30 -167 -64 -286 -194 -337 -368 -19
-62 -19 -418 0 -480 52 -175 170 -304 341 -369 64 -25 72 -25 387 -29 l322 -3
3 -322 c4 -320 4 -322 30 -391 51 -132 143 -236 262 -294 107 -52 135 -57 351
-56 183 0 206 2 265 23 165 58 276 167 339 331 25 64 25 72 29 387 l3 322 322
3 c320 4 322 4 391 30 167 64 286 194 337 368 19 62 19 418 0 480 -51 174
-170 304 -337 368 -69 26 -71 26 -391 30 l-322 3 -3 322 c-4 315 -4 323 -29
387 -63 165 -176 275 -339 330 -55 19 -91 23 -235 26 -93 1 -196 -1 -227 -6z
m416 -231 c70 -26 139 -92 174 -167 l27 -57 5 -382 c5 -381 5 -383 28 -405 22
-23 24 -23 405 -28 l382 -5 57 -27 c76 -35 141 -104 168 -175 19 -52 21 -74
18 -237 -3 -168 -5 -185 -27 -230 -33 -66 -91 -122 -160 -155 l-56 -26 -382
-5 c-381 -5 -383 -5 -405 -28 -23 -22 -23 -24 -28 -405 l-5 -382 -27 -57 c-35
-76 -104 -141 -175 -168 -52 -19 -74 -21 -237 -18 -168 3 -185 5 -230 27 -66
33 -122 91 -155 160 l-26 56 -5 382 c-5 381 -5 383 -28 405 -22 23 -24 23
-405 28 l-382 5 -57 27 c-75 35 -141 104 -167 174 -18 47 -21 78 -21 224 0
143 3 178 19 220 30 78 81 134 159 172 l67 33 382 5 c381 5 383 5 405 28 23
22 23 24 28 406 l5 383 35 69 c25 50 49 79 85 106 79 60 108 66 302 67 151 1
179 -2 227 -20z"
                />
              </g>
            </svg>
            Criar novo projeto
          </Button>
          <Button className={styles.btnIcon} variant="viewProducts">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M1204 4900 c-212 -32 -384 -187 -439 -397 -23 -86 -23 -3800 0 -3886
47 -180 184 -325 360 -380 l70 -22 1365 0 1365 0 70 22 c176 55 313 200 360
380 23 86 23 3800 0 3886 -46 177 -180 320 -354 380 l-66 22 -1340 1 c-737 1
-1363 -2 -1391 -6z m606 -260 l0 -50 -271 0 c-226 0 -276 -3 -304 -16 -70 -33
-65 122 -65 -1958 0 -1599 2 -1882 14 -1911 29 -70 -67 -65 1376 -65 1443 0
1347 -5 1376 65 12 29 14 312 14 1911 0 2080 5 1925 -65 1958 -28 13 -78 16
-304 16 l-271 0 0 51 0 50 313 -3 c303 -3 313 -4 355 -26 66 -35 119 -88 149
-150 l28 -57 0 -1895 0 -1895 -28 -57 c-30 -62 -83 -115 -149 -150 l-43 -23
-1375 0 -1375 0 -43 23 c-66 35 -119 88 -149 150 l-28 57 -3 1875 c-2 2070 -7
1933 61 2022 36 48 112 103 161 117 17 5 165 10 329 10 l297 1 0 -50z m1280
-73 c0 -137 -8 -159 -66 -183 -49 -21 -879 -21 -928 0 -58 24 -66 46 -66 183
l0 123 530 0 530 0 0 -123z m-1246 -221 c10 -40 93 -123 154 -153 l57 -28 505
0 c496 0 506 0 552 22 60 28 129 92 154 143 l19 40 223 0 222 0 0 -1760 0
-1760 -1170 0 -1170 0 0 1760 0 1760 224 0 224 0 6 -24z"
                />
                <path
                  d="M1975 3931 c-16 -10 -59 -48 -94 -84 l-64 -65 -40 29 c-22 16 -51 29
-64 29 -57 0 -113 -56 -113 -113 0 -30 42 -88 103 -145 105 -96 125 -90 295
81 124 126 132 136 132 173 0 48 -22 82 -66 100 -43 18 -53 18 -89 -5z"
                />
                <path
                  d="M2282 3815 c-36 -31 -48 -73 -32 -119 22 -69 -3 -66 630 -66 633 0
608 -3 630 66 16 46 4 88 -32 119 l-30 25 -568 0 -568 0 -30 -25z"
                />
                <path
                  d="M1895 3008 l-86 -81 -27 26 c-15 14 -39 29 -54 32 -36 9 -95 -20
-113 -56 -31 -60 -15 -97 83 -191 60 -59 75 -68 107 -68 55 0 80 18 208 148
105 108 117 124 117 156 0 73 -42 116 -115 116 -31 0 -46 -11 -120 -82z"
                />
                <path
                  d="M2303 2975 c-33 -14 -63 -59 -63 -95 0 -37 30 -81 65 -96 52 -21
1099 -21 1151 1 78 32 80 149 4 187 -32 17 -81 18 -580 18 -442 -1 -551 -3
-577 -15z"
                />
                <path
                  d="M1901 2156 l-86 -85 -33 30 c-47 43 -102 41 -148 -5 -26 -26 -34 -42
-34 -71 0 -33 9 -47 76 -116 88 -90 124 -108 176 -86 18 8 88 71 156 139 118
120 122 126 122 167 0 59 -50 111 -105 111 -34 0 -47 -9 -124 -84z"
                />
                <path
                  d="M2283 2112 c-52 -41 -53 -123 -2 -166 l31 -26 568 0 568 0 30 25 c36
31 48 73 32 119 -22 69 3 66 -632 66 -528 0 -575 -2 -595 -18z"
                />
              </g>
            </svg>
            Ver Relatórios
          </Button>
        </div>
      </div>
    </main>
  );
}
