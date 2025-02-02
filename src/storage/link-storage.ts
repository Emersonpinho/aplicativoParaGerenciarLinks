import  AsyncStorage  from "@react-native-async-storage/async-storage"

const LINKS_STORAGE_KEY = 'Links-storage'


type LinkStorage = {
    id: string
    name: string
    url: string
    category: string
}

async function get() {
    
}

async function save(newLink: LinkStorage) {
    try {

    } catch (error) {
        throw error
    }
    
}