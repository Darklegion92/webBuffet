const isClient = () => typeof window !== 'undefined'

export const GTMPageView = (url: string) => {
    interface PageEventProps {
        event: string;
        page: string;
    }
    const pageEvent: PageEventProps = {
        event: 'pageview',
        page: url,
    };
    //@ts-ignore
    isClient() && window.dataLayer && window.dataLayer.push(pageEvent);
    return pageEvent;
};
  