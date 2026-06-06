/* ==========================================
   PREMIUM LETTER EXPERIENCE v2
   Letter Opening Animation
   Smooth Reveal
   Background Music
   Fade Effects
   Scroll Effects
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const hero = document.getElementById("hero");
    const letter = document.getElementById("letter");
    const enterBtn = document.getElementById("enterBtn");
    const music = document.getElementById("bgMusic");

    let opened = false;

    /* ==========================
       OPEN LETTER
    ========================== */

    function openLetter() {

        if (opened) return;
        opened = true;

        /* --------------------------
           PLAY MUSIC
        -------------------------- */

        if (music) {

            music.volume = 0;

            music.play().then(() => {

                let volume = 0;

                const fadeMusic = setInterval(() => {

                    volume += 0.02;

                    if (volume >= 0.25) {
                        volume = 0.25;
                        clearInterval(fadeMusic);
                    }

                    music.volume = volume;

                }, 120);

            }).catch(() => {
                console.log("Autoplay blocked until user interaction.");
            });
        }

        /* --------------------------
           HERO FADE OUT
        -------------------------- */

        hero.style.transition =
            "opacity 1s ease, transform 1s ease";

        hero.style.opacity = "0";
        hero.style.transform = "scale(1.05)";

        setTimeout(() => {

            hero.style.display = "none";

            letter.classList.add("show");

            setTimeout(() => {

                letter.classList.add("open");

                letter.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                startTypewriter();

            }, 150);

        }, 1000);
    }

    /* ==========================
       BUTTON EVENTS
    ========================== */

    if (enterBtn) {

        enterBtn.addEventListener("click", openLetter);

        enterBtn.addEventListener("keydown", (e) => {

            if (
                e.key === "Enter" ||
                e.key === " "
            ) {
                e.preventDefault();
                openLetter();
            }

        });
    }

    /* ==========================
       TYPEWRITER EFFECT
    ========================== */

    function startTypewriter() {

        const paragraphs =
            document.querySelectorAll(".letter-text p");

        paragraphs.forEach((p) => {

            const original =
                p.innerHTML;

            p.dataset.content = original;

            p.innerHTML = "";

        });

        let currentParagraph = 0;

        function typeParagraph() {

            if (
                currentParagraph >=
                paragraphs.length
            ) return;

            const p =
                paragraphs[currentParagraph];

            const text =
                p.dataset.content;

            let charIndex = 0;

            const interval =
                setInterval(() => {

                    p.innerHTML +=
                        text.charAt(charIndex);

                    charIndex++;

                    if (
                        charIndex >=
                        text.length
                    ) {

                        clearInterval(interval);

                        currentParagraph++;

                        setTimeout(
                            typeParagraph,
                            250
                        );
                    }

                }, 10);
        }

        typeParagraph();
    }

    /* ==========================
       PARALLAX GLOW EFFECT
    ========================== */

    document.addEventListener(
        "mousemove",
        (e) => {

            const x =
                e.clientX /
                window.innerWidth;

            const y =
                e.clientY /
                window.innerHeight;

            document.body.style.backgroundPosition =
                `${x * 30}px ${y * 30}px`;

        }
    );

    /* ==========================
       REVEAL ON SCROLL
    ========================== */

    const observer =
        new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },

        {
            threshold: 0.15
        }
    );

    document
        .querySelectorAll(
            ".letter-text p"
        )
        .forEach((item) => {

            item.style.opacity = "0";

            item.style.transform =
                "translateY(25px)";

            item.style.transition =
                "all .8s ease";

            observer.observe(item);
        });

    /* ==========================
       ENDING GLOW EFFECT
    ========================== */

    const ending =
        document.querySelector(
            ".ending span"
        );

    if (ending) {

        setInterval(() => {

            ending.animate(
                [
                    {
                        transform:
                            "scale(1)"
                    },
                    {
                        transform:
                            "scale(1.03)"
                    },
                    {
                        transform:
                            "scale(1)"
                    }
                ],
                {
                    duration: 2500,
                    easing: "ease-in-out"
                }
            );

        }, 2500);
    }

    /* ==========================
       MUSIC FADE OUT
       WHEN USER LEAVES PAGE
    ========================== */

    window.addEventListener(
        "beforeunload",
        () => {

            if (!music) return;

            let volume =
                music.volume;

            const fade =
                setInterval(() => {

                    volume -= 0.02;

                    if (
                        volume <= 0
                    ) {

                        music.volume = 0;

                        clearInterval(
                            fade
                        );

                        music.pause();
                    }

                    music.volume =
                        volume;

                }, 100);
        }
    );

});
