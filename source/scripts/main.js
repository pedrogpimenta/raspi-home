// Write your JS here
//fake 
const fake = {'tunnels':[
  {
    'name':'http (http)',
    'uri':'/api/tunnels/http%20%28http%29',
    'public_url':'http://fb79cd49.ngrok.io',
    'proto':'http',
    'config':{'addr':'http://0.0.0.0:8080',
      'inspect':true},
    'metrics':{'conns':{'count':86,
      'gauge':0,
      'rate1':3.473974133837606e-12,
      'rate5':0.00003860614137841312,
      'rate15':0.00026192542439742544,
      'p50':20095158805.5,
      'p90':37301572183,
      'p95':70238013483.04997,
      'p99':132726574923},
    'http':{'count':136,
      'rate1':2.489211239018104e-12,
      'rate5':0.000036116324480266527,
      'rate15':0.0002564812217432882,
      'p50':103078641,
      'p90':2745438588.5,
      'p95':26300090404.900036,
      'p99':119710117124.33984}}},
  {'name':'http','uri':'/api/tunnels/http','public_url':'https://fb79cd49.ngrok.io','proto':'https','config':{'addr':'http://0.0.0.0:8080','inspect':true},'metrics':{'conns':{'count':0,'gauge':0,'rate1':0,'rate5':0,'rate15':0,'p50':0,'p90':0,'p95':0,'p99':0},'http':{'count':0,'rate1':0,'rate5':0,'rate15':0,'p50':0,'p90':0,'p95':0,'p99':0}}},{'name':'vnc','uri':'/api/tunnels/vnc','public_url':'tcp://0.tcp.ngrok.io:13089','proto':'tcp','config':{'addr':'0.0.0.0:5900','inspect':false},'metrics':{'conns':{'count':173,'gauge':0,'rate1':0.022793485812515498,'rate5':0.015376779407660272,'rate15':0.007292640569029698,'p50':355245693,'p90':397062732.6,'p95':400286930.59999996,'p99':406037821.15999997},'http':{'count':0,'rate1':0,'rate5':0,'rate15':0,'p50':0,'p90':0,'p95':0,'p99':0}}},{'name':'ssh','uri':'/api/tunnels/ssh','public_url':'tcp://0.tcp.ngrok.io:19321','proto':'tcp','config':{'addr':'0.0.0.0:22','inspect':false},'metrics':{'conns':{'count':132,'gauge':0,'rate1':1.444269327316406e-39,'rate5':3.122164040723969e-10,'rate15':0.000012431585711753355,'p50':394526225.5,'p90':400997127.4,'p95':404269037.25,'p99':20421774630.929626},'http':{'count':0,'rate1':0,'rate5':0,'rate15':0,'p50':0,'p90':0,'p95':0,'p99':0}}}],'uri':'/api/tunnels'};


let airsonicUrl = fake;

const whenFinish = (response) => {
  //airsonicUrl = response;
  
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



