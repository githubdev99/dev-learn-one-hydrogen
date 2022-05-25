import renderHydrogen from '@shopify/hydrogen/entry-server';
import {Router, Route, FileRoutes, ShopifyProvider} from '@shopify/hydrogen';
import {Suspense} from 'react';
import DefaultSeo from './components/DefaultSeo.server';
import NotFound from './components/NotFound.server';
// import CartProvider from './components/CartProvider.client';
import {
  PerformanceMetrics,
  PerformanceMetricsDebug,
} from '@shopify/hydrogen/client';
import JQueryLoad from './components/JQueryLoad.client';
import CartPageProvider from './components/CartPageProvider.client';

function App() {
  return (
    <Suspense>
      <ShopifyProvider>
        {/* <CartProvider> */}
        <CartPageProvider>
          <JQueryLoad>
            <DefaultSeo />
            <Router>
              <FileRoutes />
              <Route path="*" page={<NotFound />} />
            </Router>
          </JQueryLoad>
        </CartPageProvider>
        {/* </CartProvider> */}
        <PerformanceMetrics />
        {process.env.LOCAL_DEV && <PerformanceMetricsDebug />}
      </ShopifyProvider>
    </Suspense>
  );
}

export default renderHydrogen(App);
