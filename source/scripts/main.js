// Write your JS here
let airsonicUrl = '';

const whenFinish = (response) => {
  airsonicUrl = response;
  
  let airsonic = '';
  let vnc = '';
  let ssh = '';

  for (var tunnel in airsonicUrl.tunnels) {
    const thisTunnel = airsonicUrl.tunnels[tunnel];

    if (thisTunnel.proto === 'http') {
      airsonic = thisTunnel['public_url'] + '/airsonic/';
    }
    if (thisTunnel.name === 'vnc') {
      vnc = thisTunnel['public_url'];
    }
    if (thisTunnel.name === 'ssh') {
      ssh = thisTunnel['public_url'];
    }
  }
  
  const airsonicEl = document.getElementById('airsonic-url').firstChild;
  const vncEl = document.getElementById('vnc-url').firstChild;
  const sshEl = document.getElementById('ssh-url').firstChild;
  airsonicEl.nodeValue = airsonic;
  vncEl.nodeValue = vnc;
  sshEl.nodeValue = ssh;
};

const test = () => {
  let wiki = new XMLHttpRequest();
  wiki.addEventListener('load', () => {
    whenFinish(wiki.responseText);
  });
  wiki.open('GET', 'http://192.168.0.125:8080/airsonic/rest/ping.view?u=pimenta&p=brocas&c=myapp&v=1.12.0');
  wiki.send();
};

test();



