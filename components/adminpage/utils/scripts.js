import Script from 'next/script'
export default function Scripts() {
    return (
        <>
            <Script src="/dist/admin/vendors/js/vendor.bundle.base.js" />
            <Script src="/dist/admin/js/off-canvas.js" />
            <Script src="/dist/admin/js/hoverable-collapse.js" />
            <Script src="/dist/admin/jstemplate.js" />
        </>
    )
}