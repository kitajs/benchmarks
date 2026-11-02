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
* __Run:__ Mon Nov 02 2026 04:07:24 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.2 | ✗      | 100734.4   | 9.42         | 17.96         |
| connect                  | 3.7.0    | ✗      | 99852.8    | 9.52         | 17.81         |
| fastify                  | 4.29.1   | ✓      | 98657.6    | 9.64         | 17.69         |
| polka                    | 0.5.2    | ✓      | 98011.2    | 9.71         | 17.48         |
| kita                     | 1.1.36   | ✓      | 97244.8    | 9.79         | 17.43         |
| server-base              | 7.1.32   | ✗      | 96964.8    | 9.82         | 17.29         |
| server-base-router       | 7.1.32   | ✓      | 96616.0    | 9.86         | 17.23         |
| rayo                     | 1.4.6    | ✓      | 96214.4    | 9.89         | 17.16         |
| connect-router           | 1.3.8    | ✓      | 90857.6    | 10.55        | 16.20         |
| polkadot                 | 1.0.0    | ✗      | 87305.6    | 10.95        | 15.57         |
| hono                     | 4.13.16  | ✓      | 86593.6    | 11.04        | 14.20         |
| 0http                    | 3.5.3    | ✓      | 85656.0    | 11.19        | 15.28         |
| h3                       | 1.15.11  | ✗      | 80280.0    | 11.97        | 14.32         |
| restana                  | 4.9.9    | ✓      | 78566.4    | 12.24        | 14.01         |
| h3-router                | 1.15.11  | ✓      | 76481.6    | 12.58        | 13.64         |
| koa                      | 2.16.4   | ✗      | 75630.4    | 12.71        | 13.49         |
| take-five                | 2.0.0    | ✓      | 75620.8    | 12.71        | 27.19         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 71865.2    | 13.43        | 12.82         |
| restify                  | 11.1.0   | ✓      | 70027.6    | 13.76        | 12.62         |
| koa-router               | 12.0.1   | ✓      | 69316.0    | 13.93        | 12.36         |
| hapi                     | 21.4.12  | ✓      | 64576.8    | 15.01        | 11.52         |
| express                  | 4.22.3   | ✓      | 20993.6    | 47.12        | 3.74          |
| express-with-middlewares | 4.22.3   | ✓      | 19329.6    | 51.22        | 7.19          |
| fastify-big-json         | 4.29.1   | ✓      | 16759.9    | 59.14        | 192.83        |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
