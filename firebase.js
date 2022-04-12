import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, Timestamp, FieldValue, DocumentReference } from 'firebase-admin/firestore';


export class Fire {
    constructor() {
        // 파이어베이스 설정
        // 여기는 안봐도 됨
        const firebaseConfig = {
            credential: cert({
                "type": "service_account",
                "project_id": "book-manage-414f4",
                "private_key_id": "87ad311b2a33c090a5cea355c14e97af3db7c921",
                "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC1J9npe51dRafW\nicxFYS0WGc3jiEvg+ghQsFdsYRSvvfHc8MtUrb2VSj0Fry4OHtPPwhtogJErTwZl\nli/g2Zl1uIp7P8GWvp8hParkpp7kUbMjSu7scS0bT58YStdhsPDAVKfEuQ058YhT\n0h+L0nP46GGpa9YZ8uUQt1Y7OfIv9Sh0AmwsfpambOC+x85zAj8sLO44qYYu4psS\nagFPv52885ZRXzPtJEKqgExHGUe79FM1/2u/seDtBG9ev1oAKFrGxr/RVbc1TDA3\nUIA+0kRO7Di+8KRAnAFMj15yzXBgztE2y8dFQRXkFYyG29iDmzTFqmJbT5HzCr/5\n9EkTMJ0nAgMBAAECggEAG+DJnq5IzdFJ3nCvUF//hb6r2h+f+bvQqsYwdfvMqKz0\n+xjNWbcxDTfzAxxt3HtvAjJvcFoUvRL4u4pszM//10dyfDwYCSBFseJhGbXwjtdp\n130RHq7eD61loOHnml+V9Ssx9Eq8F9YtMiUMeMKG2V+9o8p2FOE10ig8q3mj5TA1\nYj3i0YIwS9/E/BxAAgZaaZf99q5Mzm179sGBfKOrd5NxXsCc/ZQV7ivV1SNTI2zS\noW1YsinEHu2xJicO5CxZOQqX9Iu3CAd/wxoDq/3vEswkuOSQjSLpHf6o0zU7/jcE\nvw8+Knn0gsWaJxqmpi/A84fXvtS9OhRNV5V1Ztu63QKBgQDbMYtk2vfhGVy5JCgr\n3UKBweosVQOvM9sFbu7AzJ9sfykAtjQFrvkxIR5hCniAaC+GGQgNhMxvy+stAtQA\niBthsItq8qQki7dJNf4XNzINaRq6mmui+GJR5Ht/vy9dEwaaQYOJSsCpWjYbNnht\nD+eexHCh2oPZpFeBhi/4ftdlmwKBgQDTky0MYpIZMLfZ1WeS5CxXsbQdxW91Aluh\nXAQ2XjcFidDN+gz3/pt6DqYpMoWJIfFlz4+9LMJHfwu6Zis2QcNaMTSxp2E72/DR\nxQ5DQn+8OodMPSI9w8CnGJV0YC6gWHsQaX+YvhMMj01KFFMUUPrlW4FgLtjkajou\njXwgPgSFZQKBgQDVPXzbsD6ISZEwOGGwUr+Z1pnHaSl9b9g6j/JLtIXAGnE8VQWF\nJfUde5e/Vl1mpnTdY0q3RCNS+7IeButSXRcuUX9Amy9esmGsIo+/7B2QeFjdgs8G\nK9gSzVHsNIWSaaj5tpSNoyCNYMrUbIh5qYhup7LfcuLkgAH1ayMN/+/y0wKBgCN/\nqitNzp2TYwWVnM80oYwFMOdd3RmQz7b/LWXB4RF40iP9NHfXrFaKZq6631Tm8Q3Y\nCZIAFIjSdDFOOynbVt+nKeQ05UeZ24oWuhHm8m+ukkzkZP5f/c8LfOgNy0T0E5Hp\nYZNLMP8GfD1Vs6rQ+4fIFqkAszt/50swSgdO4ItRAoGAJzBzoZkLKxdj/221/GEn\n9NbqCPL5ldebFzyEqOeaOVCpcu1fkmiIRr6k27Jjl7pLAd+lHWvDUUpTjkzHRSC/\nYIcnxxnjpe89WolICXP5kQ32ddCmKQ66mDq3H9Lx38fzDlJ/wj2QXNi9icmrtIxV\no2GQwU7eD6yuUP1GtGaejt8=\n-----END PRIVATE KEY-----\n",
                "client_email": "firebase-adminsdk-fn98d@book-manage-414f4.iam.gserviceaccount.com",
                "client_id": "108191086424397144454",
                "auth_uri": "https://accounts.google.com/o/oauth2/auth",
                "token_uri": "https://oauth2.googleapis.com/token",
                "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
                "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fn98d%40book-manage-414f4.iam.gserviceaccount.com"
              }),
        };

        // 파이어베이스 서비스 실행
        const app = initializeApp(firebaseConfig);
        // 파이어베이스 데이터베이스 연동
        this.db = getFirestore();
        console.log("Firebase Init");
    }

    //데이터베이스 계정 조회
    getAccount = async (keyword) => {
        try {
            //회원 데이터 조회
            const colRef = this.db.collection('accounts');

            //id를 기준으로 정렬한 뒤 앞글자가 keyword 변수에 해당하는 회원정보만 가져온다.
            const snapshot = await colRef.orderBy('id').startAt(keyword).endAt(keyword + '\uf8ff').get();
            
            //일치하는 회원정보가 없으면 Empty반환
            if(snapshot.empty){
                return {"result": "Empty"};
            }
            
            //일치하는 회원정보는 json데이터로 반환한다.
            var json = snapshot.docs.map(doc => doc.data());
            return json;
        } catch (error) {
            //에러 발생하면 Fail 반환
            console.log(error);
            return {"result": "Fail"};
        }

       
    };

    //데이터베이스 계정 입력
    insertAccount = async (account) => {
        try {
            //기존 계정 등록 여부 조회
            const snapshot = await this.db.collection('accounts').doc(account.id).get();

            //등록된 계정이면 추가 안함
            if(!snapshot.empty){
                return {"result": "Already Exist"};
            }
            
            //등록 안된 계정이면 추가함
            await this.db.collection('accounts').doc(account.id).set(account);

            //계정 추가 성공하면 Success반환
            return {"result": "Success"};
        } catch (error) {
            //에러발생하면 Fail 반환
            console.log(error);
            return {"result": "Fail"};
        }
    }
}