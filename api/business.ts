import { authAxios } from './axios';
import {ApiErrorMessage} from './errorMessages/apiErrorMessages';

interface ApiResponse { //TODO: Move this to a type folder within this directory
    success: boolean;
    data?: any;
    error?: string;
  }

export const BusinessApi = {
    createBusiness: async (business): Promise<ApiResponse> => {
        return authAxios({
            method: 'post',
            url: `${process.env.BACKEND_URL}/api/business`,
            data: {
                business_name: business.businessName,
                business_description: business.description,
                business_category: business.category
            }
        })
        .then(({data})=> {
            return {success: true, data: data}
        })
        .catch(err => {
            return {
                error: err.response?.data
                ? err.response.data.error
                : ApiErrorMessage.FailedCreatingBusiness
            }
        })
    },
    createBusinessStore: async (store, businessId : number): Promise<ApiResponse> => {
        return authAxios({
            method: 'post',
            url: `${process.env.BACKEND_URL}/api/business/${businessId}/stores`,
            data: {
                unique_name: store.storeName,
                city: store.city,
                address_line_1: store.address_line_1,
                address_line_2: store.address_line_2,
                country: store.country,
                state: store.state,
                postal_code: store.postalCode
            }
        })
        .then(({data})=> {
            return {success: true, data: data}
        })
        .catch(err => {
            return {
                error: err.response?.data
                ? err.response.data.error
                : ApiErrorMessage.FailedCreatingBusinessStore
            }
        })
    }
}