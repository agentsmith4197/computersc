// // withLazyLoad.tsx

// import { useState, useEffect, useRef, ComponentType } from 'react';

// interface WithLazyLoadProps {
//   // Define any additional props you want to pass to the WrappedComponent
// }

// const withLazyLoad = <P extends object>(
//   WrappedComponent: ComponentType<P & WithLazyLoadProps>
// ) => {
//   return function LazyLoadComponent(props: P) {
//     const [componentVisible, setComponentVisible] = useState(false);
//     const componentRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//       const observer = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setComponentVisible(true);
//             observer.disconnect();
//           }
//         });
//       });

//       if (componentRef.current) {
//         observer.observe(componentRef.current);
//       }

//       return () => {
//         observer.disconnect();
//       };
//     }, []);

//     return (
//       <div ref={componentRef}>
//         {componentVisible ? (
//           <WrappedComponent {...props} />
//         ) : (
//           <div>Loading...</div>
//         )}
//       </div>
//     );
//   };
// };

// export default withLazyLoad;
