import axios from 'axios';
import { api } from './api';

api.CancelToken = axios.CancelToken;
api.isCancel = axios.isCancel;
