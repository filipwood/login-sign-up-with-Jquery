    const body = document.body

    function makeBackground() {
        let backgroundText = `
            radial-gradient(
                circle at 50% 50%,
                rgb(0, 0, 0) 0%,
                rgb(0, 0, 0) 6.6%,
                rgba(0, 0, 0, 0.98) 6.9%,
                transparent 7.05%
            ),
            radial-gradient(
                circle at 50% 50%,
                transparent 0%,
                transparent 6.5%,

                rgba(255, 255, 255, 0.95) 6.65%,
                rgba(245, 220, 255, 1) 6.85%,

                rgba(210, 120, 255, 1) 7.05%,
                rgba(160, 0, 255, 1) 7.3%,

                rgba(90, 0, 255, 0.7) 7.55%,

                transparent 7.9%
            ),
            radial-gradient(
                circle at 50% 50%,
                transparent 0%,
                transparent 7%,

                rgba(200, 70, 255, 0.65) 8%,
                rgba(155, 0, 255, 0.38) 10%,
                rgba(100, 0, 255, 0.18) 14%,

                transparent 19%
            ),
            radial-gradient(
                ellipse at 50% 50%,
                transparent 0%,
                transparent 9%,

                rgba(255, 235, 255, 0.95) 10%,
                rgba(240, 170, 255, 0.9) 11%,
                rgba(195, 70, 255, 0.85) 13%,

                rgba(140, 0, 255, 0.62) 17%,
                rgba(80, 0, 200, 0.25) 23%,

                transparent 31%
            ),
            radial-gradient(
                ellipse at 50% 50%,
                transparent 0%,
                transparent 9%,

                rgba(255, 245, 255, 0.95) 10%,
                rgba(245, 175, 255, 0.95) 12%,

                rgba(220, 60, 255, 0.92) 15%,
                rgba(170, 0, 255, 0.82) 19%,

                rgba(95, 0, 230, 0.65) 25%,
                rgba(55, 0, 150, 0.35) 33%,

                transparent 44%
            ),
            radial-gradient(
                ellipse at 43% 50%,

                rgba(255, 255, 255, 0.8) 0%,
                rgba(255, 170, 255, 0.7) 5%,

                rgba(255, 0, 210, 0.55) 15%,
                rgba(180, 0, 255, 0.28) 30%,

                transparent 53%
            ),
            radial-gradient(
                ellipse at 58% 50%,

                rgba(180, 210, 255, 0.55) 0%,
                rgba(90, 110, 255, 0.42) 10%,

                rgba(70, 0, 255, 0.25) 28%,

                transparent 52%
            ),
            radial-gradient(
                ellipse at 42.5% 50%,
                rgba(4, 0, 12, 0.92) 0%,
                rgba(15, 0, 25, 0.76) 22%,
                rgba(25, 0, 45, 0.35) 42%,
                transparent 59%
            ),

            radial-gradient(
                ellipse at 57.5% 50%,
                rgba(4, 0, 12, 0.92) 0%,
                rgba(15, 0, 25, 0.76) 22%,
                rgba(25, 0, 45, 0.35) 42%,
                transparent 59%
            ),
            radial-gradient(
                ellipse at 50% 50%,
                transparent 0%,
                transparent 11%,

                rgba(255, 220, 255, 0.8) 12%,
                rgba(220, 100, 255, 0.75) 14%,

                rgba(170, 0, 255, 0.58) 18%,
                rgba(105, 0, 240, 0.38) 23%,

                transparent 30%
            ),
            conic-gradient(
                from 210deg at 50% 50%,

                transparent 0deg,

                rgba(255, 0, 220, 0.1) 20deg,
                transparent 42deg,

                rgba(180, 0, 255, 0.22) 74deg,
                transparent 115deg,

                rgba(80, 40, 255, 0.13) 150deg,
                transparent 190deg,

                rgba(255, 0, 180, 0.18) 225deg,
                transparent 270deg,

                rgba(140, 0, 255, 0.18) 315deg,

                transparent 360deg
            ),
            linear-gradient(
                96deg,

                transparent 0%,
                transparent 47.7%,

                rgba(110, 0, 255, 0.01) 48.4%,
                rgba(150, 20, 255, 0.08) 49.2%,
                rgba(230, 120, 255, 0.13) 49.8%,

                rgba(255, 210, 255, 0.10) 50%,

                rgba(160, 50, 255, 0.08) 50.5%,
                rgba(80, 0, 220, 0.03) 51.2%,

                transparent 52.2%
            ),
            radial-gradient(
                ellipse at 50% 50%,

                rgba(120, 0, 255, 0.28) 0%,
                rgba(100, 0, 210, 0.20) 18%,

                rgba(65, 0, 150, 0.11) 35%,
                rgba(35, 0, 90, 0.05) 52%,

                transparent 72%
            ),
            radial-gradient(
                ellipse at 50% 60%,

                rgba(90, 0, 255, 0.14) 0%,
                rgba(60, 0, 150, 0.07) 35%,

                transparent 65%
            ),
            radial-gradient(
                circle at 10% 8%,

                rgba(190, 0, 110, 0.15) 0%,
                rgba(120, 0, 100, 0.07) 30%,

                transparent 60%
            ),
            radial-gradient(
                circle at 93% 40%,

                rgba(60, 0, 180, 0.13) 0%,
                rgba(20, 0, 100, 0.07) 35%,

                transparent 65%
            ),
        `

        let coordsX = 0
        let coordsY = 0
        let size = 0
        let lightStarsAmount = Math.floor(Math.random() * 26) + 10;
        let darkStarsAmount = Math.floor(Math.random() * 26) + 10;
        for(let i = 0; i < lightStarsAmount; i++) {
            size = (Math.random() * 0.15 + 0.05).toFixed(2)
            coordsX = Math.random() * 100
            coordsY = Math.random() * 100
            const deadAreaX = (coordsX - 50) / 24
            const deadAreaY = (coordsY - 50) / 21
            if(deadAreaX * deadAreaX + deadAreaY * deadAreaY <= 1) {
                i--
                continue
            }
            backgroundText += `
                radial-gradient(
                    circle at ${coordsX}% ${coordsY}%,
                    white 0%,
                    rgb(234, 197, 255) ${size}%,
                    transparent ${Number(size) + 0.1}%
                ),
            `
        }
        for(let i = 0; i < darkStarsAmount; i++) {
            size = (Math.random() * 0.15 + 0.05).toFixed(2)
            coordsX = Math.random() * 100
            coordsY = Math.random() * 100
            const deadAreaX = (coordsX - 50) / 24
            const deadAreaY = (coordsY - 50) / 21

            if(deadAreaX * deadAreaX + deadAreaY * deadAreaY <= 1) {
                i--
                continue
            }

            backgroundText += `
                radial-gradient(
                    circle at ${coordsX}% ${coordsY}%,
                    gray 0%,
                    rgb(147, 108, 168) ${size}%,
                    transparent ${Number(size) + 0.1}%
                ),
            `
        }

        backgroundText += `
            radial-gradient(
                circle at 50% 50%,
                rgb(21, 0, 43) 0%,
                rgb(12, 0, 29) 25%,
                rgb(8, 0, 19) 48%,
                rgb(4, 0, 11) 72%,
                rgb(1, 0, 5) 100%
            )
        `

        body.style.background = backgroundText
    }

makeBackground()