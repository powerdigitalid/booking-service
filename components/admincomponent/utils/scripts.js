import Script from 'next/script'
export default function Scripts() {
    return (
        <>
            <Script src="/dist/js/bootstrap.bundle.min.js" />
            <Script src="/dist/js/datatables-demo.js" />
            <Script src="/dist/js/dataTables.bootstrap.min.js" />
            <Script src="/dist/js/jquery.dataTables.min.js" />
            <Script src="/dist/js/jquery.easing.min.js" />
            <Script src="/dist/js/jquery.min.js" />
            <Script src="/dist/js/sb-admin-2.min.js" />
        </>
    )
}