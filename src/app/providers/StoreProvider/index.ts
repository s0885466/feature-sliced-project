import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore } from './config/store';
import type {
    StateSchema, ReduxStoreWithManager, ThunkConfig,
} from './config/StateSchema';
import type { AppDispatch } from './config/store';

export {
    StoreProvider,
    AppDispatch,
    createReduxStore,
    StateSchema,
    ReduxStoreWithManager,
    ThunkConfig,
};
