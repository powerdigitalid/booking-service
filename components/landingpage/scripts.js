import Script from 'next/script'
export default function Scripts() {
    return (
        <>
            <Script src="/dist/js/jquery.colorbox.js" />
            <Script src="/dist/js/script.js" />
            <Script src="/dist/js/suffle.min.js" />
            <Script src="/dist/js/slick.min.js" />
            <Script src="/dist/js/slick-animation.min.js" />
        </>
    )
}