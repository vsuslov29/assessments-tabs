import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider, useDispatch } from 'react-redux';
import { setAssesments } from './actions';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import createStore from './store/configureStore';
import creatorAssessments from './public/creatorAssessments.json';
import evaluatorAssessments from './public/evaluatorAssessments.json';
import { SET_CREATOR_ASSESSMENTS, SET_EVALUATOR_ASSESSMENTS } from './constants';

const store = createStore();

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const dispatch = useDispatch();

  useEffect(() => {
    const actionEvaluator = setAssesments(evaluatorAssessments, SET_EVALUATOR_ASSESSMENTS);
    const actionCreator = setAssesments(creatorAssessments, SET_CREATOR_ASSESSMENTS);

    dispatch(actionEvaluator);
    dispatch(actionCreator);
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

export default function AppWrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
