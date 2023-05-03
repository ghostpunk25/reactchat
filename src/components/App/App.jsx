import { Routes, Route } from 'react-router-dom';
import { context } from 'context/context';
import { Layout } from 'components/Layout/Layout';
import { lazy, Suspense, useContext } from 'react';
import { Spinner } from 'components/Spinner/Spinner';
import { Chat } from 'pages/Chat/Chat';
// Chat без Suspense, тому що в компоненті присутня функція setTimeout

const Main = lazy(() => import('pages/Main/Main').then(module => ({
  ...module,
  default: module.Main
})));

const CreateProfile = lazy(() => import('pages/CreateProfile/CreateProfile').then(module => ({
  ...module,
  default: module.CreateProfile
})));

const Catalog = lazy(() => import('pages/Catalog/Catalog').then(module => ({
  ...module,
  default: module.Catalog
})));

const ProfileDetails = lazy(() => import('pages/ProfileDetails/ProfileDetails').then(module => ({
  ...module,
  default: module.ProfileDetails
})));

const AllChatsList = lazy(() => import('pages/AllChatsList/AllChatsList').then(module => ({
  ...module,
  default: module.AllChatsList
})));

export const App = () => {
  const ctx = useContext(context);

  return (
    <>
      <Routes>
        <Route path="*" element={
          <Suspense fallback={<Spinner />}>
            <Main user={ctx.user} />
          </Suspense>} />
        {!ctx.user
          ?
          <Route path="/create" element={
            <Layout backLink={ctx.backLink}>
              <Suspense fallback={<Spinner />}>
                <CreateProfile />
              </Suspense>
            </Layout>} />
          : <>
            <Route path="/catalog" element={
              <Layout user={ctx.user} backLink={ctx.backLink}>
                <Suspense fallback={<Spinner />}>
                  <Catalog />
                </Suspense>
              </Layout>} />
            <Route path="/catalog/:profileId" element={
              <Layout user={ctx.user} backLink={ctx.backLink}>
                <Suspense fallback={<Spinner />}>
                  <ProfileDetails />
                </Suspense>
              </Layout>} />
            <Route path="/chat" element={
              <Layout user={ctx.user} backLink={ctx.backLink} visible={ctx.chatFooter}>
                <Chat />
              </Layout>} />
            <Route path="/chatslist" element={
              <Layout user={ctx.user} backLink={ctx.backLink} visible={ctx.chatFooter}>
                <Suspense fallback={<Spinner />}>
                  <AllChatsList />
                </Suspense>
              </Layout>} />
          </>}
      </Routes>
    </>
  );
};
