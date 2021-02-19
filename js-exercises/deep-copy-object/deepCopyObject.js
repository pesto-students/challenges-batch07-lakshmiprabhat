import _ from "lodash";
const deepCopyObject = (objToCopy) => {
    const objtoCopyWithLodashCloneDeep = _.cloneDeep(objToCopy);
    return objtoCopyWithLodashCloneDeep;
};

export { deepCopyObject };