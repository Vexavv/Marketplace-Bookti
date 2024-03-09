import axios from 'axios';
import { BASE_URL } from '../../constants/api';
import { IResData } from '../../store/slices/profileSlice/profileSliceTypes';

class BookshelfTabsService {
    async getData(url: string) {
        const { data } = await axios.get<IResData>(`${BASE_URL}/${url}`);

        return data;
    }
}

export default new BookshelfTabsService();
