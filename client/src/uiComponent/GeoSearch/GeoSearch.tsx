//
// import { autocomplete } from '@algolia/autocomplete-js';
// import React, { createElement, Fragment, useEffect, useRef } from 'react';
// import { createRoot } from 'react-dom/client';
//
// // eslint-disable-next-line import/prefer-default-export
// export const GeoSearch = (props:any) => {
//     const containerRef = React.useRef<HTMLDivElement | null>(null);
//     const panelRootRef = React.useRef<React.ReactPortal | null>(null);
//     const rootRef = React.useRef<DocumentFragment | null>(null);
//
//     useEffect(() => {
//         if (!containerRef.current) {
//             return () => {};
//         }
//
//         const search = autocomplete({
//             container: containerRef.current,
//             renderer: { createElement, Fragment, render: () => {} },
//             render({ children }, root) {
//                 if (rootRef.current && rootRef.current !== root) {
//                     panelRootRef.current?.unmount();
//                 }
//
//                 rootRef.current = root;
//
//                 if (rootRef.current instanceof HTMLElement) {
//                     panelRootRef.current = createRoot(rootRef.current);
//                     panelRootRef.current.render(children);
//                 }
//             },
//             ...props,
//         });
//
//         return () => {
//             search.destroy();
//         };
//     }, [props]);
//
//     return <div ref={containerRef} />;
// };