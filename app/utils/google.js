import querystring from 'querystring';
import request from 'request-promise-native';

const OAUTH_URL = 'https://accounts.google.com/o/oauth2/v2/auth';
const CLOUD_RESOURCE_URL = 'https://cloudresourcemanager.googleapis.com/v1';
const PREDICTION_URL_TEMPLATE = 'https://www.googleapis.com/prediction/v1.6/projects/project-id/trainedmodels';

function getAuthUrl(clientId) {
  const params = querystring.stringify({
    response_type: 'code',
    client_id: clientId,
    redirect_uri: 'http://localhost:3333/app/oauthCallback.html',
    prompt: 'consent',
    access_type: 'offline',
    scope: [
      'profile', 'email',
      'https://www.googleapis.com/auth/cloud-platform',
      'https://www.googleapis.com/auth/prediction'
    ].join(' ')
  });

  return `${OAUTH_URL}?${params}`;
}

function getProjectList(accessToken) {
  return request({
    uri: `${CLOUD_RESOURCE_URL}/projects`,
    qs: {
      access_token: accessToken
    },
    json: true
  });
}

function getModelList(projectId, accessToken, key) {
  return request({
    uri: `${getTrainedModelUrl(projectId)}/list`,
    qs: {
      key,
      access_token: accessToken
    },
    json: true
  });
}

function getTrainedModelUrl(projectId) {
  return PREDICTION_URL_TEMPLATE.replace('project-id', projectId);
}

module.exports = {
  getAuthUrl,
  getModelList,
  getProjectList
};
