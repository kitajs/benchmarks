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
* __Node:__ `v20.19.0`
* __Run:__ Mon Apr 07 2025 01:33:33 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| h3                       | 1.15.1   | ✗      | 48252.0    | 20.23        | 8.61          |
| bare                     | v20.19.0 | ✗      | 47208.8    | 20.67        | 8.42          |
| connect                  | 3.7.0    | ✗      | 45652.0    | 21.41        | 8.14          |
| server-base              | 7.1.32   | ✗      | 45622.4    | 21.43        | 8.14          |
| rayo                     | 1.4.6    | ✓      | 45578.4    | 21.46        | 8.13          |
| kita                     | 1.1.36   | ✓      | 45543.2    | 21.48        | 8.17          |
| polka                    | 0.5.2    | ✓      | 45068.8    | 21.69        | 8.04          |
| server-base-router       | 7.1.32   | ✓      | 44935.2    | 21.79        | 8.01          |
| polkadot                 | 1.0.0    | ✗      | 44879.2    | 21.78        | 8.00          |
| fastify                  | 4.29.0   | ✓      | 44664.8    | 21.90        | 8.01          |
| 0http                    | 3.5.3    | ✓      | 44547.2    | 21.94        | 7.94          |
| connect-router           | 1.3.8    | ✓      | 42401.6    | 23.10        | 7.56          |
| h3-router                | 1.15.1   | ✓      | 41835.2    | 23.41        | 7.46          |
| hono                     | 4.7.5    | ✓      | 40341.6    | 24.26        | 6.62          |
| restana                  | 4.9.9    | ✓      | 40129.6    | 24.42        | 7.16          |
| koa                      | 2.16.1   | ✗      | 36186.2    | 27.14        | 6.45          |
| take-five                | 2.0.0    | ✓      | 35434.2    | 27.71        | 12.74         |
| restify                  | 11.1.0   | ✓      | 34851.0    | 28.18        | 6.28          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34221.4    | 28.73        | 6.10          |
| koa-router               | 12.0.1   | ✓      | 32636.8    | 30.14        | 5.82          |
| hapi                     | 21.4.0   | ✓      | 31881.6    | 30.86        | 5.69          |
| fastify-big-json         | 4.29.0   | ✓      | 11486.8    | 86.51        | 132.16        |
| express                  | 4.21.2   | ✓      | 11070.6    | 89.75        | 1.97          |
| express-with-middlewares | 4.21.2   | ✓      | 10302.8    | 96.44        | 3.83          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
