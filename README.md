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
* __Run:__ Mon Oct 05 2026 03:44:11 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.2 | ✗      | 48448.8    | 20.15        | 8.64          |
| rayo                     | 1.4.6    | ✓      | 46183.2    | 21.14        | 8.24          |
| kita                     | 1.1.36   | ✓      | 45840.8    | 21.32        | 8.22          |
| fastify                  | 4.29.1   | ✓      | 45819.2    | 21.34        | 8.21          |
| connect                  | 3.7.0    | ✗      | 45432.8    | 21.53        | 8.10          |
| server-base-router       | 7.1.32   | ✓      | 45355.2    | 21.55        | 8.09          |
| polka                    | 0.5.2    | ✓      | 45175.2    | 21.64        | 8.06          |
| server-base              | 7.1.32   | ✗      | 45038.4    | 21.71        | 8.03          |
| polkadot                 | 1.0.0    | ✗      | 43936.0    | 22.26        | 7.84          |
| 0http                    | 3.5.3    | ✓      | 43152.8    | 22.68        | 7.70          |
| connect-router           | 1.3.8    | ✓      | 42789.6    | 22.86        | 7.63          |
| h3                       | 1.15.11  | ✗      | 41273.6    | 23.73        | 7.36          |
| h3-router                | 1.15.11  | ✓      | 39589.6    | 24.76        | 7.06          |
| hono                     | 4.13.13  | ✓      | 39048.8    | 25.12        | 6.41          |
| restana                  | 4.9.9    | ✓      | 38299.8    | 25.61        | 6.83          |
| koa                      | 2.16.4   | ✗      | 36247.8    | 27.09        | 6.46          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34551.8    | 28.44        | 6.16          |
| take-five                | 2.0.0    | ✓      | 34064.6    | 28.85        | 12.25         |
| restify                  | 11.1.0   | ✓      | 34020.6    | 28.89        | 6.13          |
| koa-router               | 12.0.1   | ✓      | 32227.8    | 30.52        | 5.75          |
| hapi                     | 21.4.10  | ✓      | 31980.8    | 30.77        | 5.70          |
| fastify-big-json         | 4.29.1   | ✓      | 11723.4    | 84.73        | 134.89        |
| express                  | 4.22.3   | ✓      | 10941.6    | 90.80        | 1.95          |
| express-with-middlewares | 4.22.3   | ✓      | 10247.0    | 96.99        | 3.81          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
