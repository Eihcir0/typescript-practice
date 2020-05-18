// import { User } from './User';
// import { Company } from './Company';
import { CustomMap } from './CustomMap';
import { User } from './User';
import { Company } from './Company';

const user = new User()
const co = new Company()
const cm = new CustomMap('map')
console.log(cm)
cm.addMarker(user)
cm.addMarker(co)
