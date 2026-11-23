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
* __Run:__ Mon Nov 23 2026 05:26:43 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.2 | ✗      | 90825.6    | 10.58        | 16.20         |
| polka                    | 0.5.2    | ✓      | 89254.4    | 10.75        | 15.92         |
| kita                     | 1.1.36   | ✓      | 88468.8    | 10.83        | 15.86         |
| fastify                  | 4.29.1   | ✓      | 88041.6    | 10.86        | 15.79         |
| rayo                     | 1.4.6    | ✓      | 87980.8    | 10.86        | 15.69         |
| connect                  | 3.7.0    | ✗      | 86098.0    | 11.11        | 15.36         |
| server-base              | 7.1.32   | ✗      | 84993.6    | 11.22        | 15.16         |
| connect-router           | 1.3.8    | ✓      | 84793.6    | 11.28        | 15.12         |
| server-base-router       | 7.1.32   | ✓      | 84790.4    | 11.28        | 15.12         |
| hono                     | 4.13.20  | ✓      | 82577.6    | 11.61        | 13.55         |
| koa                      | 2.16.4   | ✗      | 75328.0    | 12.78        | 13.43         |
| polkadot                 | 1.0.0    | ✗      | 74014.4    | 13.02        | 13.20         |
| 0http                    | 3.5.3    | ✓      | 73680.0    | 13.08        | 13.14         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 72328.0    | 13.33        | 12.90         |
| restify                  | 11.1.0   | ✓      | 70601.4    | 13.69        | 12.73         |
| take-five                | 2.0.0    | ✓      | 70307.6    | 13.73        | 25.28         |
| koa-router               | 12.0.1   | ✓      | 68675.2    | 14.05        | 12.25         |
| restana                  | 4.9.9    | ✓      | 68499.2    | 14.11        | 12.22         |
| hapi                     | 21.4.13  | ✓      | 64088.8    | 15.11        | 11.43         |
| h3                       | 1.15.11  | ✗      | 63546.0    | 15.23        | 11.33         |
| h3-router                | 1.15.11  | ✓      | 61182.4    | 15.85        | 10.91         |
| express                  | 4.22.3   | ✓      | 24163.6    | 40.87        | 4.31          |
| express-with-middlewares | 4.22.3   | ✓      | 22453.2    | 44.01        | 8.35          |
| fastify-big-json         | 4.29.1   | ✓      | 21757.6    | 45.44        | 250.34        |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.2   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
