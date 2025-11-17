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
* __Node:__ `v20.19.5`
* __Run:__ Mon Nov 17 2025 01:36:48 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.5 | ✗      | 46707.2    | 20.90        | 8.33          |
| fastify                  | 4.29.1   | ✓      | 46460.8    | 21.01        | 8.33          |
| polka                    | 0.5.2    | ✓      | 46304.0    | 21.10        | 8.26          |
| kita                     | 1.1.36   | ✓      | 46146.4    | 21.15        | 8.27          |
| rayo                     | 1.4.6    | ✓      | 45652.8    | 21.41        | 8.14          |
| server-base              | 7.1.32   | ✗      | 45382.4    | 21.54        | 8.09          |
| connect                  | 3.7.0    | ✗      | 44983.0    | 21.73        | 8.02          |
| server-base-router       | 7.1.32   | ✓      | 44573.6    | 21.94        | 7.95          |
| polkadot                 | 1.0.0    | ✗      | 44492.8    | 21.98        | 7.93          |
| h3                       | 1.15.4   | ✗      | 42768.0    | 22.89        | 7.63          |
| connect-router           | 1.3.8    | ✓      | 42604.0    | 22.97        | 7.60          |
| h3-router                | 1.15.4   | ✓      | 41777.6    | 23.44        | 7.45          |
| 0http                    | 3.5.3    | ✓      | 41728.8    | 23.47        | 7.44          |
| restana                  | 4.9.9    | ✓      | 39077.6    | 25.10        | 6.97          |
| hono                     | 4.10.6   | ✓      | 36987.4    | 26.54        | 6.07          |
| koa                      | 2.16.3   | ✗      | 36444.2    | 26.93        | 6.50          |
| take-five                | 2.0.0    | ✓      | 35045.8    | 28.03        | 12.60         |
| restify                  | 11.1.0   | ✓      | 34547.0    | 28.43        | 6.23          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34283.8    | 28.67        | 6.11          |
| koa-router               | 12.0.1   | ✓      | 32461.6    | 30.30        | 5.79          |
| hapi                     | 21.4.4   | ✓      | 30965.6    | 31.79        | 5.52          |
| fastify-big-json         | 4.29.1   | ✓      | 11841.2    | 83.91        | 136.24        |
| express                  | 4.21.2   | ✓      | 10844.2    | 91.64        | 1.93          |
| express-with-middlewares | 4.21.2   | ✓      | 9573.6     | 103.85       | 3.56          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
