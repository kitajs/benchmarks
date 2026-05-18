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
* __Run:__ Mon May 18 2026 03:07:33 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.2 | ✗      | 57175.2    | 16.98        | 10.20         |
| rayo                     | 1.4.6    | ✓      | 56640.0    | 17.15        | 10.10         |
| polka                    | 0.5.2    | ✓      | 56476.8    | 17.22        | 10.07         |
| fastify                  | 4.29.1   | ✓      | 56270.4    | 17.26        | 10.09         |
| server-base-router       | 7.1.32   | ✓      | 55907.2    | 17.37        | 9.97          |
| connect                  | 3.7.0    | ✗      | 55847.2    | 17.40        | 9.96          |
| server-base              | 7.1.32   | ✗      | 55552.0    | 17.49        | 9.91          |
| kita                     | 1.1.36   | ✓      | 55437.6    | 17.53        | 9.94          |
| connect-router           | 1.3.8    | ✓      | 52846.4    | 18.44        | 9.42          |
| polkadot                 | 1.0.0    | ✗      | 50380.8    | 19.35        | 8.98          |
| 0http                    | 3.5.3    | ✓      | 48847.2    | 19.98        | 8.71          |
| hono                     | 4.12.19  | ✓      | 47156.0    | 20.71        | 7.73          |
| h3                       | 1.15.11  | ✗      | 45666.4    | 21.40        | 8.14          |
| restana                  | 4.9.9    | ✓      | 45644.0    | 21.41        | 8.14          |
| h3-router                | 1.15.11  | ✓      | 45467.2    | 21.50        | 8.11          |
| koa                      | 2.16.4   | ✗      | 45217.6    | 21.61        | 8.06          |
| take-five                | 2.0.0    | ✓      | 44220.0    | 22.10        | 15.90         |
| restify                  | 11.1.0   | ✓      | 42900.0    | 22.81        | 7.73          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 42889.6    | 22.83        | 7.65          |
| koa-router               | 12.0.1   | ✓      | 41275.2    | 23.71        | 7.36          |
| hapi                     | 21.4.9   | ✓      | 37641.6    | 26.07        | 6.71          |
| express                  | 4.22.2   | ✓      | 13110.8    | 75.70        | 2.34          |
| express-with-middlewares | 4.22.2   | ✓      | 12469.4    | 79.62        | 4.64          |
| fastify-big-json         | 4.29.1   | ✓      | 12049.2    | 82.43        | 138.64        |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
