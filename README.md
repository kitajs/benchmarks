<div align="center">
  <img src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg" width="650" height="auto"/>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/workflows/ci/badge.svg)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/fastify/fastify/badge.svg?branch=master)](https://coveralls.io/github/fastify/fastify?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![NPM version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify) [![Discord](https://img.shields.io/discord/725613461949906985)](https://discord.gg/fastify)

</div>
<br />

# TL;DR

* [Fastify](https://github.com/fastify/fastify) is a fast and low overhead web framework for Node.js.
* This package shows how fast it is comparatively.
* For metrics (cold-start) see [metrics.md](./METRICS.md)

# Requirements

To be included in this list, the framework should captivate users' interest. We have identified the following minimal requirements:
- **Ensure active usage**: a minimum of 500 downloads per week
- **Maintain an active repository** with at least one event (comment, issue, PR) in the last month
- The framework must use the **Node.js** HTTP module

# Usage

Clone this repo. Then 

```
node ./benchmark [arguments (optional)]
```

#### Arguments

* `-h`: Help on how to use the tool.
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.20.2`
* __Run:__ Mon Aug 31 2026 03:03:30 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.2 | ✗      | 47571.2    | 20.52        | 8.48          |
| polka                    | 0.5.2    | ✓      | 47238.4    | 20.67        | 8.42          |
| connect                  | 3.7.0    | ✗      | 47091.2    | 20.72        | 8.40          |
| rayo                     | 1.4.6    | ✓      | 46551.2    | 20.98        | 8.30          |
| fastify                  | 4.29.1   | ✓      | 46419.2    | 21.04        | 8.32          |
| server-base              | 7.1.32   | ✗      | 46104.0    | 21.17        | 8.22          |
| kita                     | 1.1.36   | ✓      | 46103.2    | 21.20        | 8.26          |
| server-base-router       | 7.1.32   | ✓      | 45714.4    | 21.37        | 8.15          |
| 0http                    | 3.5.3    | ✓      | 44948.0    | 21.76        | 8.02          |
| polkadot                 | 1.0.0    | ✗      | 44046.4    | 22.20        | 7.85          |
| connect-router           | 1.3.8    | ✓      | 43587.2    | 22.44        | 7.77          |
| h3                       | 1.15.11  | ✗      | 42902.4    | 22.81        | 7.65          |
| h3-router                | 1.15.11  | ✓      | 42748.0    | 22.89        | 7.62          |
| restana                  | 4.9.9    | ✓      | 39586.4    | 24.76        | 7.06          |
| hono                     | 4.13.5   | ✓      | 39168.0    | 25.02        | 6.42          |
| koa                      | 2.16.4   | ✗      | 36315.4    | 27.05        | 6.48          |
| take-five                | 2.0.0    | ✓      | 35593.8    | 27.59        | 12.80         |
| restify                  | 11.1.0   | ✓      | 35138.2    | 27.95        | 6.33          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34159.2    | 28.77        | 6.09          |
| hapi                     | 21.4.10  | ✓      | 32905.8    | 29.87        | 5.87          |
| koa-router               | 12.0.1   | ✓      | 32610.0    | 30.18        | 5.82          |
| fastify-big-json         | 4.29.1   | ✓      | 11801.4    | 84.18        | 135.78        |
| express                  | 4.22.2   | ✓      | 11250.0    | 88.28        | 2.01          |
| express-with-middlewares | 4.22.2   | ✓      | 10267.5    | 96.80        | 3.82          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
