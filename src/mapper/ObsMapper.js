import { createObsFromControl } from 'src/helpers/Obs';
import { cloneDeep } from 'lodash';

export class ObsMapper {

  getInitialObject(formName, formVersion, control, bahmniObservations) {
    return createObsFromControl(formName, formVersion, control, bahmniObservations);
  }

  _isNewVoidedObs(obs) {
    return !obs.getUuid() && obs.isVoided();
  }

  _hasNoValue(obs) {
    const value = obs.getValue();
    return value === '' || value === undefined || value === null;
  }

  getValue(obs) {
    return obs.value;
  }

  getObs(obs) {
    if (this._hasNoValue(obs) || this._isNewVoidedObs(obs)) {
      return undefined;
    }
    return obs;
  }

  setValue(obs, value) {
    if (value !== '' && value !== undefined) {
      return obs.setValue(value);
    }
    return obs.void();
  }

  setComment(obs, comment) {
    return obs.setComment(comment);
  }

  getComment(obs) {
    return obs.getComment();
  }

  getObject(obs) {
    return obs.getObject(obs);
  }

  getData(record){
    let obs = cloneDeep(record.dataSource);
    if (obs.formFieldPath != record.formFieldPath) {
      obs.uuid = undefined;
      obs.formFieldPath = record.formFieldPath;
    }
    obs.value = record.value;
    obs.voided = !record.value;

    return obs;
  }

  getChildren(obs){
    return [];
  }
}
