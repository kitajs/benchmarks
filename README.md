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
* __Node:__ `v20.18.0`
* __Run:__ Mon Nov 04 2024 01:29:21 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| fastify                  | 4.28.1   | ✓      | 47848.0    | 20.41        | 8.58          |
| bare                     | v20.18.0 | ✗      | 47789.6    | 20.43        | 8.52          |
| kita                     | 1.1.36   | ✓      | 47612.8    | 20.52        | 8.54          |
| rayo                     | 1.4.6    | ✓      | 47496.0    | 20.54        | 8.47          |
| connect                  | 3.7.0    | ✗      | 47196.8    | 20.69        | 8.42          |
| polka                    | 0.5.2    | ✓      | 46856.8    | 20.84        | 8.36          |
| server-base              | 7.1.32   | ✗      | 46410.4    | 21.03        | 8.28          |
| polkadot                 | 1.0.0    | ✗      | 46170.4    | 21.17        | 8.23          |
| server-base-router       | 7.1.32   | ✓      | 46011.2    | 21.21        | 8.21          |
| 0http                    | 3.5.3    | ✓      | 45170.4    | 21.64        | 8.06          |
| connect-router           | 1.3.8    | ✓      | 43708.0    | 22.37        | 7.79          |
| h3                       | 1.13.0   | ✗      | 43062.4    | 22.72        | 7.68          |
| h3-router                | 1.13.0   | ✓      | 40796.0    | 24.01        | 7.28          |
| hono                     | 4.6.8    | ✓      | 39916.8    | 24.54        | 7.12          |
| restana                  | 4.9.9    | ✓      | 39320.8    | 24.93        | 7.01          |
| koa                      | 2.15.3   | ✗      | 37432.2    | 26.23        | 6.68          |
| take-five                | 2.0.0    | ✓      | 35227.0    | 27.87        | 12.67         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35183.0    | 27.92        | 6.27          |
| restify                  | 11.1.0   | ✓      | 34290.2    | 28.65        | 6.18          |
| koa-router               | 12.0.1   | ✓      | 33837.4    | 29.04        | 6.03          |
| hapi                     | 21.3.12  | ✓      | 32055.6    | 30.69        | 5.72          |
| fastify-big-json         | 4.28.1   | ✓      | 11993.2    | 82.80        | 137.99        |
| express                  | 4.21.1   | ✓      | 10894.0    | 91.22        | 1.94          |
| express-with-middlewares | 4.21.1   | ✓      | 10054.1    | 98.83        | 3.74          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
